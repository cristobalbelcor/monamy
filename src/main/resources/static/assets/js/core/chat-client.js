// Cliente HTTP del chat. La API key vive en el backend: el navegador nunca la ve.

import { CHAT_STREAM_ENDPOINT } from '../config.js';

export class ChatClient {
    /**
     * Envía el historial completo y va entregando la respuesta según llega.
     * @param {Array<{role: string, content: string}>} messages
     * @param {(textoAcumulado: string) => void} onProgress se llama con cada fragmento nuevo
     * @returns {Promise<string>} la respuesta completa
     */
    async stream(messages, onProgress) {
        const res = await fetch(CHAT_STREAM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
            body: JSON.stringify({ messages }),
        });

        if (!res.ok || !res.body) {
            throw new Error((await res.text()) || `Error ${res.status}`);
        }

        const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
        let buffer = '';
        let reply = '';

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;

            // Un evento SSE termina en línea en blanco; lo que queda a medias espera al siguiente trozo.
            buffer += value;
            const events = buffer.split(/\r?\n\r?\n/);
            buffer = events.pop();

            for (const raw of events) {
                const { event, data } = parseEvent(raw);
                if (event === 'error') throw new Error('El backend no pudo completar la respuesta');
                if (event === 'fin') return reply;
                if (event === 'fragmento' && data) {
                    reply += JSON.parse(data).t;
                    onProgress(reply);
                }
            }
        }

        // El stream se cortó sin evento de cierre.
        throw new Error('La respuesta llegó incompleta');
    }
}

function parseEvent(raw) {
    let event = 'message';
    const data = [];
    for (const line of raw.split(/\r?\n/)) {
        if (line.startsWith('event:')) event = line.slice(6).trim();
        else if (line.startsWith('data:')) data.push(line.slice(5).replace(/^ /, ''));
    }
    return { event, data: data.join('\n') };
}
