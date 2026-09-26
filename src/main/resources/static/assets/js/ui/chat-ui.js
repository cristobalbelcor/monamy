// Pintado de los mensajes del chat. La presentación vive en el CSS:
// aquí solo se asignan clases, nunca estilos en línea.

import { dom } from './dom.js';

const LOGO_SRC = 'assets/img/logo.png';

export class ChatUI {
    constructor(container) {
        this.el = container;
    }

    /**
     * Añade un mensaje al hilo.
     * @param {'bot'|'user'} role
     * @param {string} content texto plano, o Markdown si viene del bot
     */
    append(role, content) {
        const wrap = document.createElement('div');
        wrap.className = `message ${role}`;
        wrap.append(this.#buildAvatar(role), this.#buildBubble(role, content));

        this.el.appendChild(wrap);
        this.scroll();
    }

    /**
     * Añade un mensaje del bot vacío que se va completando mientras llega el stream.
     * @returns {{update: (markdown: string) => void}}
     */
    appendStreaming() {
        const wrap = document.createElement('div');
        wrap.className = 'message bot';
        const bubble = this.#buildBubble('bot', '');
        wrap.append(this.#buildAvatar('bot'), bubble);
        this.el.appendChild(wrap);

        // Se repinta como mucho una vez por frame aunque lleguen muchos fragmentos seguidos.
        let pending = null;
        return {
            update: (markdown) => {
                if (pending === null) {
                    requestAnimationFrame(() => {
                        this.#renderBot(bubble, pending);
                        pending = null;
                        this.scroll();
                    });
                }
                pending = markdown;
            },
        };
    }

    #buildAvatar(role) {
        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';

        if (role === 'bot') {
            const img = document.createElement('img');
            img.src = LOGO_SRC;
            img.alt = 'Monamy';
            img.className = 'msg-avatar-img';
            avatar.appendChild(img);
        } else {
            const icon = document.createElement('i');
            icon.className = 'fa-solid fa-user msg-avatar-icon';
            avatar.appendChild(icon);
        }
        return avatar;
    }

    #buildBubble(role, content) {
        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';

        // Solo el bot devuelve Markdown; el texto del usuario se inserta sin interpretar.
        if (role === 'bot') {
            this.#renderBot(bubble, content);
        } else {
            bubble.textContent = content;
        }
        return bubble;
    }

    #renderBot(bubble, markdown) {
        if (window.marked) {
            bubble.innerHTML = window.marked.parse(markdown);
        } else {
            bubble.textContent = markdown;
        }
    }

    clear() {
        this.el.replaceChildren();
    }

    scroll() {
        this.el.scrollTop = this.el.scrollHeight;
    }

    showTyping() {
        dom.typingIndicator.classList.remove('hidden');
        this.scroll();
    }

    hideTyping() {
        dom.typingIndicator.classList.add('hidden');
    }
}
