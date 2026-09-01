// Chips con preguntas sugeridas para arrancar la conversación.

import { dom } from './dom.js';
import { ROLES } from '../data/roles.js';

/**
 * Pinta los chips del tema actual.
 * @param {string} role
 * @param {string} topicKey
 * @param {(text: string) => void} onPick qué hacer cuando eligen un chip
 */
export function renderSuggestions(role, topicKey, onPick) {
    dom.suggestionsRow.replaceChildren();

    const suggestions = ROLES[role]?.suggestions?.[topicKey] ?? [];
    suggestions.forEach((text) => {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = 'chip';
        chip.textContent = text;
        chip.addEventListener('click', () => {
            clearSuggestions();
            onPick(text);
        });
        dom.suggestionsRow.appendChild(chip);
    });
}

export function clearSuggestions() {
    dom.suggestionsRow.replaceChildren();
}
