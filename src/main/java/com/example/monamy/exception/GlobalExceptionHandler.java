package com.example.monamy.exception;

import com.example.monamy.dto.ChatResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * Manejo centralizado de errores de la API.
 *
 * Sin esta clase, un fallo de validación devuelve el JSON por defecto de Spring
 * ({@code {"timestamp":...,"error":"Bad Request"}}), que el frontend no sabe leer
 * porque espera siempre un {@link ChatResponse}.
 *
 * El detalle técnico se registra en el log del servidor y nunca se envía al
 * navegador: los mensajes del proveedor de IA pueden exponer configuración interna.
 *
 * Se limita al paquete de controladores a propósito: si se aplicara a toda la
 * aplicación, un recurso estático inexistente acabaría devolviendo 500 en vez de 404.
 */
@RestControllerAdvice(basePackages = "com.example.monamy.controller")
public class GlobalExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    private static final String MENSAJE_VALIDACION =
            "No pudimos leer tu mensaje. Por favor, intenta escribirlo de nuevo.";

    private static final String MENSAJE_GENERICO =
            "Lo sentimos, ocurrió un error al procesar tu mensaje. Por favor, intenta de nuevo.";

    /**
     * Petición mal formada: falta la lista de mensajes o viene vacía.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ChatResponse> manejarValidacion(MethodArgumentNotValidException ex) {
        log.warn("Petición inválida a /api/chat: {}", ex.getMessage());
        return ResponseEntity.badRequest().body(ChatResponse.error(MENSAJE_VALIDACION));
    }

    /**
     * Cualquier otro fallo: proveedor de IA caído, credenciales inválidas, cuota agotada.
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ChatResponse> manejarErrorInesperado(Exception ex) {
        log.error("Error procesando la conversación", ex);
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(ChatResponse.error(MENSAJE_GENERICO));
    }
}
