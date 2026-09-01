// Ciclo de vida de una conversación: abrirla, dar la bienvenida y enviar mensajes.

import { ROLES } from '../data/roles.js';
import { ALERT_TOPICS } from '../data/alerts.js';
import { getTopicLabel } from '../data/topics.js';
import { ConversationManager } from './conversation.js';
import { ChatClient } from './chat-client.js';
import { state } from './state.js';
import { dom } from '../ui/dom.js';
import { ChatUI } from '../ui/chat-ui.js';
import { showScreen, SCREENS } from '../ui/screens.js';
import { renderSuggestions } from '../ui/suggestions.js';
import { DEFAULT_ACCENT, WELCOME_PAUSE_MS, ERROR_MESSAGE } from '../config.js';

const conversation = new ConversationManager();
const client = new ChatClient();
const chatUI = new ChatUI(dom.chatMessages);

/**
 * Abre el chat para un rol y un tema.
 * @param {string} role
 * @param {string} topicKey
 * @param {string|null} subtemaPrompt primer mensaje del usuario, si viene de un subtema
 */
export async function startChat(role, topicKey, subtemaPrompt = null) {
    state.role = role;
    state.topic = topicKey;

    applyRoleAccent(role);
    setTopicBadge(getTopicLabel(role, topicKey));

    conversation.init(role, topicKey);
    renderSuggestions(role, topicKey, sendMessage);
    chatUI.clear();
    showScreen(SCREENS.chat);

    await sendWelcome(role, topicKey, subtemaPrompt);
}

/**
 * Envía un mensaje del usuario y pinta la respuesta.
 * Punto único de entrada: lo usan el formulario, los chips y los subtemas.
 */
export async function sendMessage(text) {
    chatUI.append('user', text);
    conversation.addUser(text);
    chatUI.showTyping();

    try {
        const reply = await client.send(conversation.getAll());
        chatUI.append('bot', reply);
        conversation.addBot(reply);
    } catch (error) {
        console.error('Error Monamy:', error);
        chatUI.append('bot', ERROR_MESSAGE);
    } finally {
        chatUI.hideTyping();
    }
}

/** El acento del rol se propaga por CSS con la variable --role-accent. */
function applyRoleAccent(role) {
    const color = ROLES[role]?.color ?? DEFAULT_ACCENT;
    document.documentElement.style.setProperty('--role-accent', color);
}

function setTopicBadge(label) {
    dom.chatBadge.textContent = label;
    dom.chatBadge.classList.toggle('hidden', !label);
}

async function sendWelcome(role, topicKey, subtemaPrompt) {
    const greeting = buildGreeting(role, topicKey, Boolean(subtemaPrompt));
    chatUI.append('bot', greeting);
    conversation.addBot(greeting);

    // Si el usuario llegó por un subtema, ese texto arranca la conversación por él.
    if (subtemaPrompt) {
        await pause(WELCOME_PAUSE_MS);
        await sendMessage(subtemaPrompt);
    }
}

function buildGreeting(role, topicKey, fromSubtema) {
    if (fromSubtema) {
        return '💛 ¡Hola, hola! Soy Monamy, y me alegra MUCHÍSIMO que estés aquí. Cuéntame todo 🌟';
    }

    const isAlert = Boolean(ALERT_TOPICS[topicKey]);
    const label = getTopicLabel(role, topicKey);

    const WELCOMES = {
        nino: isAlert
            ? '💛 Hola. Me alegra tanto que hayas llegado. Aquí estoy contigo, sin prisa y sin juicios. ¿Puedes contarme qué está pasando? Escucho todo lo que me quieras decir 🤗'
            : `💛 ¡Hola, hola! Soy Monamy y me emociona que estés aquí. Elegiste hablar de **${label}** — ¡eso es muy valiente! Cuéntame: ¿qué fue lo que te hizo pensar en ese tema hoy?`,

        adolescente: isAlert
            ? '💙 Hola. Llegaste al lugar correcto. Puedes contarme lo que está pasando a tu ritmo, sin apuros. ¿Qué está pasando?'
            : `💙 Hola. Soy Monamy. Estoy aquí para escucharte sobre **${label}**, sin juicios y con respeto total. ¿Por dónde empezamos?`,

        adulto: `💛 Hola. Soy Monamy, tu apoyo de orientación familiar. Quieres hablar sobre **${label}**. Para orientarte mejor: ¿cuántos años tiene el niño, niña o adolescente que acompañas?`,

        docente: `📚 Hola. Soy Monamy, aquí para apoyarte con **${label}**. Cuéntame la situación con el mayor contexto posible para poder orientarte bien.`,
    };

    return WELCOMES[role] ?? WELCOMES.adulto;
}

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
