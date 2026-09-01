// Historial de la conversación en el formato que espera el backend.

import { buildSystemPrompt } from '../prompts/system-prompts.js';

export class ConversationManager {
    constructor() {
        this.messages = [];
    }

    /** Reinicia el historial dejando solo el prompt de sistema del rol y tema. */
    init(role, topicKey) {
        this.messages = [{ role: 'system', content: buildSystemPrompt(role, topicKey) }];
    }

    addUser(text) {
        this.messages.push({ role: 'user', content: text });
    }

    addBot(text) {
        this.messages.push({ role: 'assistant', content: text });
    }

    getAll() {
        return this.messages;
    }
}
