// Punto de entrada: conecta el DOM con la lógica. Aquí vive todo el cableado
// de eventos, para que los demás módulos no dependan unos de otros.

import { dom } from './ui/dom.js';
import { state } from './core/state.js';
import { ROLES } from './data/roles.js';
import { startChat, sendMessage } from './core/chat-session.js';
import { renderTopics, showTopicDetail, hasSubtemas } from './ui/topics.js';
import { initEmergencyModal, openEmergencyModal } from './ui/emergency.js';
import { showScreen, goHome, SCREENS } from './ui/screens.js';
import { DEFAULT_ACCENT, FALLBACK_ROLE } from './config.js';

/** Alertas que abren las líneas de ayuda antes de entrar al chat. */
const CRITICAL_ALERTS = ['desaparicion', 'abuso', 'crisis'];

function initRoleSelection() {
    dom.roleCards.forEach((card) => {
        card.addEventListener('click', () => {
            const role = card.dataset.role;
            state.role = role;

            dom.roleCards.forEach((other) => other.classList.remove('selected'));
            card.classList.add('selected');

            document.documentElement.style.setProperty(
                '--role-accent',
                ROLES[role]?.color ?? DEFAULT_ACCENT,
            );

            renderTopics(role, onTopicSelected);
        });
    });
}

function onTopicSelected(topicKey) {
    // Los niños pasan por una pantalla que explica el tema; el resto va directo al chat.
    if (hasSubtemas(state.role, topicKey)) {
        state.detailTopic = topicKey;
        showTopicDetail(topicKey, (key, prompt) => startChat('nino', key, prompt));
    } else {
        startChat(state.role, topicKey);
    }
}

function initTopicDetail() {
    dom.backToHomeBtn.addEventListener('click', () => showScreen(SCREENS.home));
    dom.talkGeneralBtn.addEventListener('click', () => {
        if (state.detailTopic) startChat('nino', state.detailTopic);
    });
}

function initAlertCards() {
    dom.alertCards.forEach((card) => {
        card.addEventListener('click', () => {
            const alertKey = card.dataset.alert;
            if (CRITICAL_ALERTS.includes(alertKey)) openEmergencyModal();
            startChat(state.role ?? FALLBACK_ROLE, alertKey);
        });
    });
}

function initChatForm() {
    dom.backBtn.addEventListener('click', goHome);

    // El textarea crece con el contenido.
    dom.userInput.addEventListener('input', () => {
        dom.userInput.style.height = 'auto';
        dom.userInput.style.height = `${dom.userInput.scrollHeight}px`;
    });

    // Enter envía; Shift+Enter hace salto de línea.
    dom.userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            dom.chatForm.requestSubmit();
        }
    });

    dom.chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = dom.userInput.value.trim();
        if (!text) return;

        dom.userInput.value = '';
        dom.userInput.style.height = 'auto';
        sendMessage(text);
    });
}

initRoleSelection();
initTopicDetail();
initAlertCards();
initChatForm();
initEmergencyModal();
