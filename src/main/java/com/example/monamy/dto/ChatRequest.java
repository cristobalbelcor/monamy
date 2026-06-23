package com.example.monamy.dto;

import com.example.monamy.model.Mensaje;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;

/**
 * DTO (Data Transfer Object) para la solicitud de chat del frontend.
 * Contiene la lista de mensajes de la conversación actual.
 */
public class ChatRequest {

    @NotEmpty(message = "La lista de mensajes no puede estar vacía")
    private List<Mensaje> messages;

    // Constructor vacío
    public ChatRequest() {}

    // Constructor con parámetros
    public ChatRequest(List<Mensaje> messages) {
        this.messages = messages;
    }

    // Getters y Setters
    public List<Mensaje> getMessages() {
        return messages;
    }

    public void setMessages(List<Mensaje> messages) {
        this.messages = messages;
    }
}
