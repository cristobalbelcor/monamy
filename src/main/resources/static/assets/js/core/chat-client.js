// Cliente HTTP del chat. La API key vive en el backend: el navegador nunca la ve.

import { CHAT_ENDPOINT } from '../config.js';

export class ChatClient {
    /**
     * Envía el historial completo y devuelve la respuesta del asistente.
     * @param {Array<{role: string, content: string}>} messages
     * @returns {Promise<string>}
     */
    async send(messages) {
        const res = await fetch(CHAT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages }),
        });

        if (!res.ok) {
            throw new Error((await res.text()) || `Error ${res.status}`);
        }

        const data = await res.json();
        if (data.success) return data.reply;
        if (data.choices?.[0]?.message?.content) return data.choices[0].message.content;
        throw new Error(data.error || 'Error desconocido del backend');
    }
}
