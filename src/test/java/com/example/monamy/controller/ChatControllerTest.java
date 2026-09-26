package com.example.monamy.controller;

import com.example.monamy.service.GroqService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import reactor.core.publisher.Flux;

import java.nio.charset.StandardCharsets;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.asyncDispatch;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.request;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Pruebas del endpoint /api/chat. El servicio de IA se sustituye por un doble,
 * así que no se consume cuota real ni se depende de la red.
 */
@WebMvcTest(ChatController.class)
class ChatControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GroqService groqService;

    @Test
    void devuelveLaRespuestaDeLaIaCuandoLaPeticionEsValida() throws Exception {
        given(groqService.obtenerRespuesta(anyList())).willReturn("Hola, aquí estoy.");

        mockMvc.perform(post("/api/chat")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"messages":[{"role":"user","content":"hola"}]}
                                """))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.reply").value("Hola, aquí estoy."));
    }

    @Test
    void rechazaLaPeticionSinMensajes() throws Exception {
        mockMvc.perform(post("/api/chat")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.success").value(false));
    }

    @Test
    void devuelveUnMensajeAmableSiFallaElProveedor() throws Exception {
        given(groqService.obtenerRespuesta(anyList()))
                .willThrow(new RuntimeException("429 Too Many Requests"));

        mockMvc.perform(post("/api/chat")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"messages":[{"role":"user","content":"hola"}]}
                                """))
                .andExpect(status().isInternalServerError())
                .andExpect(jsonPath("$.success").value(false))
                // El detalle técnico no debe llegar al navegador.
                .andExpect(jsonPath("$.error").value(org.hamcrest.Matchers.not(
                        org.hamcrest.Matchers.containsString("429"))));
    }

    @Test
    void transmiteLaRespuestaPorFragmentosYCierraConFin() throws Exception {
        given(groqService.transmitirRespuesta(anyList())).willReturn(Flux.just("Hola", ", aquí\nestoy."));

        MvcResult result = mockMvc.perform(post("/api/chat/stream")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"messages":[{"role":"user","content":"hola"}]}
                                """))
                .andExpect(request().asyncStarted())
                .andReturn();

        String cuerpo = mockMvc.perform(asyncDispatch(result))
                .andExpect(status().isOk())
                .andReturn().getResponse().getContentAsString(StandardCharsets.UTF_8);

        // El navegador decodifica el stream como UTF-8, igual que aquí.
        assertThat(cuerpo).isEqualTo("""
                        event:fragmento
                        data:{"t":"Hola"}

                        event:fragmento
                        data:{"t":", aquí\\nestoy."}

                        event:fin
                        data:{}

                        """);
    }

    @Test
    void avisaConUnEventoDeErrorSinDetalleSiFallaElStream() throws Exception {
        given(groqService.transmitirRespuesta(anyList()))
                .willReturn(Flux.concat(Flux.just("Hola"), Flux.error(new RuntimeException("429 Too Many Requests"))));

        MvcResult result = mockMvc.perform(post("/api/chat/stream")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                                {"messages":[{"role":"user","content":"hola"}]}
                                """))
                .andReturn();

        mockMvc.perform(asyncDispatch(result))
                .andExpect(content().string(org.hamcrest.Matchers.endsWith("event:error\ndata:{}\n\n")))
                .andExpect(content().string(org.hamcrest.Matchers.not(
                        org.hamcrest.Matchers.containsString("429"))));
    }
}
