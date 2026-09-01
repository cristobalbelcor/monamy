// Referencias al DOM en un solo lugar, para no repetir getElementById por todo el código.
// Los módulos ES se ejecutan diferidos, así que el documento ya está parseado aquí.

const byId = (id) => document.getElementById(id);

export const dom = {
    screens: document.querySelectorAll('.screen'),

    // Home
    roleCards: document.querySelectorAll('.role-card'),
    alertCards: document.querySelectorAll('.alert-card'),
    topicsSection: byId('topics-section'),
    topicsTitle: byId('topics-title'),
    topicsSub: byId('topics-sub'),
    topicsGrid: byId('topics-grid'),

    // Detalle de tema
    topicDetailHero: byId('topic-detail-hero'),
    subtopicsGrid: byId('subtopics-grid'),
    talkGeneralBtn: byId('talk-general-btn'),
    backToHomeBtn: byId('back-to-home-btn'),

    // Chat
    chatMessages: byId('chat-messages'),
    chatBadge: byId('chat-badge'),
    chatForm: byId('chat-form'),
    userInput: byId('user-input'),
    sendBtn: byId('send-btn'),
    typingIndicator: byId('typing-indicator'),
    suggestionsRow: byId('suggestions-row'),
    backBtn: byId('back-btn'),

    // Emergencias
    sosBtn: byId('sos-btn'),
    emergencyModal: byId('emergency-modal'),
    closeEmergencyBtn: byId('close-emergency'),
};
