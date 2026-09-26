// Constantes de la aplicación.

/** Endpoint del backend que reenvía la conversación al proveedor de IA. */
export const CHAT_ENDPOINT = '/api/chat';

/** Mismo endpoint, pero la respuesta llega por Server-Sent Events según se genera. */
export const CHAT_STREAM_ENDPOINT = '/api/chat/stream';

/** Color de acento cuando el rol no define uno. */
export const DEFAULT_ACCENT = '#9F7AEA';

/** Rol que se asume si el usuario abre una alerta sin haber elegido rol. */
export const FALLBACK_ROLE = 'adolescente';

/** Pausa antes de enviar el subtema, para que se lea el saludo. */
export const WELCOME_PAUSE_MS = 600;

/** Mensaje mostrado cuando falla la llamada al backend. */
export const ERROR_MESSAGE =
    '😔 Ocurrió un error al procesar tu mensaje. Por favor, verifica tu conexión e intenta de nuevo.';
