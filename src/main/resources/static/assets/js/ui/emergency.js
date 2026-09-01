// Modal con las líneas de ayuda. Se abre desde el botón SOS y desde las
// tarjetas de alerta más graves.

import { dom } from './dom.js';

export function openEmergencyModal() {
    dom.emergencyModal.classList.remove('hidden');
}

export function closeEmergencyModal() {
    dom.emergencyModal.classList.add('hidden');
}

export function initEmergencyModal() {
    dom.sosBtn.addEventListener('click', openEmergencyModal);
    dom.closeEmergencyBtn.addEventListener('click', closeEmergencyModal);

    // Cerrar al tocar fuera de la hoja.
    dom.emergencyModal.addEventListener('click', (event) => {
        if (event.target === dom.emergencyModal) closeEmergencyModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeEmergencyModal();
    });
}
