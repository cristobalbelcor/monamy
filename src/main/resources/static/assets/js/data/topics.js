// Consultas sobre el catálogo de temas.

import { ROLES } from './roles.js';
import { ALERT_TOPICS } from './alerts.js';

/** Etiqueta legible de un tema, sea del catálogo por rol o una alerta. */
export function getTopicLabel(role, topicKey) {
    if (!topicKey) return 'Conversación general';
    if (ALERT_TOPICS[topicKey]) return ALERT_TOPICS[topicKey].label;
    const roleData = ROLES[role];
    if (!roleData) return topicKey;
    const found = roleData.topics.find(t => t.key === topicKey);
    return found ? `${found.emoji} ${found.title}` : topicKey;
}
