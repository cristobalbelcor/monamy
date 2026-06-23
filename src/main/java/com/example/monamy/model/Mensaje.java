package com.example.monamy.model;

/**
 * Representa un mensaje individual en la conversación.
 * Encapsula el rol del emisor y el contenido del mensaje.
 * 
 * Roles posibles:
 * - "system": instrucciones internas de comportamiento de la IA
 * - "user": mensaje enviado por el usuario (padre/docente)
 * - "assistant": respuesta generada por la IA
 */
public class Mensaje {

    private String role;
    private String content;

    // Constructor vacío (necesario para deserialización JSON)
    public Mensaje() {}

    // Constructor con parámetros
    public Mensaje(String role, String content) {
        this.role = role;
        this.content = content;
    }

    // Getters y Setters
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "Mensaje{role='" + role + "', content='" + 
               (content.length() > 50 ? content.substring(0, 50) + "..." : content) + "'}";
    }
}
