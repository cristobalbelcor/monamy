// Rejilla de temas por rol y pantalla de detalle con subtemas (rol "nino").

import { dom } from './dom.js';
import { showScreen, SCREENS } from './screens.js';
import { ROLES } from '../data/roles.js';
import { NINO_SUBTEMAS } from '../data/subtemas-nino.js';

/**
 * Pinta los temas del rol elegido.
 * @param {string} role
 * @param {(topicKey: string) => void} onSelect
 */
export function renderTopics(role, onSelect) {
    const roleData = ROLES[role];
    if (!roleData) return;

    dom.topicsTitle.textContent = roleData.topicsTitle;
    dom.topicsSub.textContent = roleData.topicsSub;
    dom.topicsGrid.replaceChildren();

    roleData.topics.forEach((topic) => {
        dom.topicsGrid.appendChild(buildTopicCard(topic, onSelect));
    });

    dom.topicsSection.classList.remove('hidden');
    setTimeout(
        () => dom.topicsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
        80,
    );
}

function buildTopicCard(topic, onSelect) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'topic-card';
    card.innerHTML = `
        <span class="tc-emoji">${topic.emoji}</span>
        <h4>${topic.title}</h4>
        <p>${topic.desc}</p>
    `;
    card.addEventListener('click', () => onSelect(topic.key));
    return card;
}

/**
 * Pantalla intermedia del rol "nino": explica el tema y ofrece subtemas concretos.
 * @param {string} topicKey
 * @param {(topicKey: string, prompt: string) => void} onSubtemaSelect
 */
export function showTopicDetail(topicKey, onSubtemaSelect) {
    const data = NINO_SUBTEMAS[topicKey];
    const meta = ROLES.nino.topics.find((topic) => topic.key === topicKey) ?? {};

    dom.topicDetailHero.innerHTML = `
        <div class="detail-emoji">${meta.emoji ?? '💚'}</div>
        <h2 class="detail-title">${meta.title ?? ''}</h2>
        <div class="detail-explicacion">${renderBold(data?.explicacion ?? '')}</div>
    `;

    dom.subtopicsGrid.replaceChildren();
    (data?.subtemas ?? []).forEach((sub) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'subtopic-card';
        card.innerHTML = `<span class="stc-emoji">${sub.emoji}</span><span class="stc-text">${sub.texto}</span>`;
        card.addEventListener('click', () => onSubtemaSelect(topicKey, sub.prompt));
        dom.subtopicsGrid.appendChild(card);
    });

    showScreen(SCREENS.topic);
}

/** Convierte el **negrita** del Markdown ligero de las explicaciones. */
function renderBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

/** ¿Este tema tiene pantalla de subtemas? Solo aplica al rol "nino". */
export function hasSubtemas(role, topicKey) {
    return role === 'nino' && Boolean(NINO_SUBTEMAS[topicKey]);
}
