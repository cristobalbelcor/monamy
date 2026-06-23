package com.example.monamy.dto;

/**
 * DTO para la respuesta del chat al frontend.
 * Encapsula la respuesta de la IA junto con metadatos de estado.
 */
public class ChatResponse {

    private boolean success;
    private String reply;
    private String error;

    // Constructor vacío
    public ChatResponse() {}

    // Factory method para respuesta exitosa
    public static ChatResponse exito(String reply) {
        ChatResponse response = new ChatResponse();
        response.success = true;
        response.reply = reply;
        return response;
    }

    // Factory method para respuesta con error
    public static ChatResponse error(String errorMessage) {
        ChatResponse response = new ChatResponse();
        response.success = false;
        response.error = errorMessage;
        return response;
    }

    // Getters y Setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getReply() {
        return reply;
    }

    public void setReply(String reply) {
        this.reply = reply;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
