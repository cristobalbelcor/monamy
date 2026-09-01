// Cambio de pantalla. Solo una lleva la clase "active" a la vez.

import { dom } from './dom.js';
import { state } from '../core/state.js';

export const SCREENS = {
    home: 'screen-home',
    topic: 'screen-topic',
    chat: 'screen-chat',
};

export function showScreen(id) {
    dom.screens.forEach((screen) => {
        screen.classList.toggle('active', screen.id === id);
    });
}

export function goHome() {
    showScreen(SCREENS.home);
    state.topic = null;
}
