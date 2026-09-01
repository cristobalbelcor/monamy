package com.example.monamy.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * El frontend se sirve desde static/assets. Estas pruebas fijan las rutas
 * públicas para que una reorganización de carpetas no las rompa en silencio.
 */
@SpringBootTest
@AutoConfigureMockMvc
class RecursosEstaticosTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void sirveLaPaginaPrincipal() throws Exception {
        mockMvc.perform(get("/")).andExpect(status().isOk());
    }

    @Test
    void sirveLosAssetsDelFrontend() throws Exception {
        mockMvc.perform(get("/assets/css/styles.css")).andExpect(status().isOk());
        mockMvc.perform(get("/assets/js/main.js")).andExpect(status().isOk());
        mockMvc.perform(get("/assets/img/logo.png")).andExpect(status().isOk());
    }

    @Test
    void unRecursoInexistenteDevuelve404YNo500() throws Exception {
        // El manejador global de errores no debe convertir un 404 en un 500.
        mockMvc.perform(get("/no-existe.js")).andExpect(status().isNotFound());
    }
}
