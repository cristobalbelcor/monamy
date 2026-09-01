// Situaciones de riesgo que se muestran como tarjetas de alerta en la home.
// El prompt se envía como primer mensaje del usuario al abrir el chat.

export const ALERT_TOPICS = {
    desaparicion: {
        label: '🔍 Desaparición o secuestro',
        prompt: 'Necesito ayuda: alguien cercano ha desaparecido o tengo miedo de que me lleven sin mi consentimiento.'
    },
    abuso: {
        label: '🛡️ Abuso o maltrato',
        prompt: 'Quiero hablar sobre una situación de abuso físico, emocional o sexual que me preocupa.'
    },
    bullying: {
        label: '💬 Bullying o acoso',
        prompt: 'Estoy pasando por bullying o acoso, en el colegio o en redes sociales, y no sé qué hacer.'
    },
    crisis: {
        label: '🧠 Crisis emocional',
        prompt: 'Estoy pasando por una crisis emocional muy fuerte y necesito apoyo urgente.'
    }
};
