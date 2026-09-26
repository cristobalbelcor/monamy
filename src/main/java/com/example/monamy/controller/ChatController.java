package com.example.monamy.controller;

import com.example.monamy.dto.ChatRequest;
import com.example.monamy.dto.ChatResponse;
import com.example.monamy.service.GroqService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.codec.ServerSentEvent;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.util.Map;

/**
 * Controlador REST para el chat de Monamy.
 * Punto de entrada de las peticiones HTTP del frontend.
 *
 * Principios aplicados:
 * - Separación de responsabilidades (el controlador solo orquesta)
 * - Validación de entrada con @Valid
 * - Respuestas tipadas con ChatResponse
 * - Los errores se resuelven en {@code GlobalExceptionHandler}, no aquí
 */
@RestController
@RequestMapping("/api/chat")
public class ChatController {

    private static final Logger log = LoggerFactory.getLogger(ChatController.class);

    private final GroqService groqService;

    /**
     * Inyección de dependencias por constructor.
     */
    public ChatController(GroqService groqService) {
        this.groqService = groqService;
    }

    /**
     * Endpoint POST /api/chat
     * Recibe la conversación completa del frontend y devuelve la respuesta de la IA.
     *
     * @param request DTO con la lista de mensajes de la conversación
     * @return ChatResponse con la respuesta de la IA
     */
    @PostMapping
    public ResponseEntity<ChatResponse> chat(@Valid @RequestBody ChatRequest request) {
        String respuesta = groqService.obtenerRespuesta(request.getMessages());
        return ResponseEntity.ok(ChatResponse.exito(respuesta));
    }

    /**
     * Endpoint POST /api/chat/stream
     * Igual que /api/chat, pero devuelve la respuesta como Server-Sent Events
     * a medida que el modelo la genera, para que el usuario empiece a leer
     * sin esperar la respuesta completa.
     *
     * Eventos: "fragmento" con {"t": texto}, y al final "fin" o "error".
     * Un fallo a mitad del stream no pasa por {@code GlobalExceptionHandler}
     * porque la respuesta ya empezó: se avisa con el evento "error", sin detalle técnico.
     */
    @PostMapping(path = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<ServerSentEvent<Map<String, String>>> chatEnStreaming(@Valid @RequestBody ChatRequest request) {
        return groqService.transmitirRespuesta(request.getMessages())
                .map(fragmento -> evento("fragmento", Map.of("t", fragmento)))
                .concatWithValues(evento("fin", Map.of()))
                .onErrorResume(e -> {
                    log.error("Error en el stream de la conversación", e);
                    return Flux.just(evento("error", Map.of()));
                });
    }

    private static ServerSentEvent<Map<String, String>> evento(String nombre, Map<String, String> datos) {
        return ServerSentEvent.builder(datos).event(nombre).build();
    }
}
