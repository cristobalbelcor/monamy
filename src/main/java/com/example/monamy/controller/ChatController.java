package com.example.monamy.controller;

import com.example.monamy.dto.ChatRequest;
import com.example.monamy.dto.ChatResponse;
import com.example.monamy.service.GroqService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controlador REST para el chat de Monamy.
 * Punto de entrada de las peticiones HTTP del frontend.
 * 
 * Principios aplicados:
 * - Separación de responsabilidades (el controlador solo orquesta)
 * - Validación de entrada con @Valid
 * - Respuestas tipadas con ChatResponse
 */
@RestController
@RequestMapping("/api/chat")
public class ChatController {

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
     * @return ChatResponse con la respuesta de la IA o un mensaje de error
     */
    @PostMapping
    public ResponseEntity<ChatResponse> chat(@Valid @RequestBody ChatRequest request) {
        try {
            String respuesta = groqService.obtenerRespuesta(request.getMessages());
            return ResponseEntity.ok(ChatResponse.exito(respuesta));
        } catch (Exception e) {
            return ResponseEntity.internalServerError()
                    .body(ChatResponse.error("Lo sentimos, ocurrió un error: " + e.getMessage()));
        }
    }
}
