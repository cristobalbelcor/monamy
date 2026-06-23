package com.example.monamy.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

/**
 * Configuración de la conexión con la API de Groq.
 * Centraliza las credenciales y parámetros de la API externa.
 */
@Configuration
public class GroqConfig {

    @Value("${groq.api.key}")
    private String apiKey;

    @Value("${groq.api.url}")
    private String apiUrl;

    @Value("${groq.api.model}")
    private String model;

    @Value("${groq.api.temperature}")
    private double temperature;

    @Value("${groq.api.max-tokens}")
    private int maxTokens;

    /**
     * Bean de WebClient preconfigurado con los headers de autorización para Groq.
     */
    @Bean
    public WebClient groqWebClient() {
        if (apiKey == null || apiKey.isBlank()) {
            throw new IllegalStateException("Falta configurar GROQ_API_KEY para conectar Monamy con Groq.");
        }

        return WebClient.builder()
                .baseUrl(apiUrl)
                .defaultHeader("Authorization", "Bearer " + apiKey)
                .defaultHeader("Content-Type", "application/json")
                .build();
    }

    public String getModel() {
        return model;
    }

    public double getTemperature() {
        return temperature;
    }

    public int getMaxTokens() {
        return maxTokens;
    }
}
