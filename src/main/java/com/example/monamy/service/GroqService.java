package com.example.monamy.service;

import com.example.monamy.config.GroqConfig;
import com.example.monamy.model.Mensaje;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Servicio que gestiona la comunicación con la API de Groq.
 * Aplica el principio de responsabilidad única (SRP):
 * - Construye el payload para la API
 * - Envía la petición HTTP
 * - Parsea la respuesta JSON
 */
@Service
public class GroqService {

    private final WebClient groqWebClient;
    private final GroqConfig groqConfig;
    private final ObjectMapper objectMapper;

    /**
     * Constructor con inyección de dependencias (Dependency Injection).
     */
    public GroqService(WebClient groqWebClient, GroqConfig groqConfig) {
        this.groqWebClient = groqWebClient;
        this.groqConfig = groqConfig;
        this.objectMapper = new ObjectMapper();
    }

    /**
     * Envía la conversación completa a la API de Groq y devuelve
     * únicamente el texto de la respuesta del asistente.
     *
     * @param mensajes Lista de mensajes de la conversación
     * @return Texto de la respuesta generada por la IA
     * @throws RuntimeException si ocurre un error en la comunicación
     */
    public String obtenerRespuesta(List<Mensaje> mensajes) {
        // Construir el cuerpo de la petición
        Map<String, Object> requestBody = construirPayload(mensajes);

        try {
            // Realizar la petición POST a Groq
            String responseJson = groqWebClient.post()
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block(); // Bloquea hasta obtener respuesta

            // Extraer el contenido del mensaje de la respuesta JSON
            return extraerContenido(responseJson);

        } catch (WebClientResponseException e) {
            throw new RuntimeException(
                "Error de la API de Groq (HTTP " + e.getStatusCode() + "): " + e.getResponseBodyAsString()
            );
        } catch (Exception e) {
            throw new RuntimeException("Error al comunicarse con la IA: " + e.getMessage());
        }
    }

    /**
     * Construye el payload JSON que espera la API de Groq.
     * Encapsula la lógica de formato del request.
     */
    private Map<String, Object> construirPayload(List<Mensaje> mensajes) {
        Map<String, Object> payload = new HashMap<>();
        payload.put("model", groqConfig.getModel());
        payload.put("messages", mensajes);
        payload.put("temperature", groqConfig.getTemperature());
        payload.put("max_tokens", groqConfig.getMaxTokens());
        return payload;
    }

    /**
     * Parsea la respuesta JSON de Groq y extrae el texto del primer choice.
     */
    private String extraerContenido(String responseJson) {
        try {
            JsonNode root = objectMapper.readTree(responseJson);
            return root.path("choices").get(0).path("message").path("content").asText();
        } catch (Exception e) {
            throw new RuntimeException("Error al parsear la respuesta de la IA: " + e.getMessage());
        }
    }
}
