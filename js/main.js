// Función para abrir modales
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando modales');
    const modalButtons = document.querySelectorAll('.abrir-modal');
    const modals = document.querySelectorAll('.modal-overlay');

    console.log(`Botones de modal encontrados: ${modalButtons.length}`);
    console.log(`Modales encontrados: ${modals.length}`);

    // Imprimir todos los títulos disponibles en modalContents
    console.log('Títulos disponibles en modalContents:', Object.keys(modalContents));

    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botón de modal clickeado');

            const modalKey = button.closest('.tarjeta').dataset.modal;
            const modalOverlay = document.getElementById(`modal-${modalKey}`);
            const modalContent = modalOverlay.querySelector('.modal-contenido');
            
            console.log(`Modal key: ${modalKey}`);
            console.log(`Modal overlay: ${modalOverlay}`);

            // Buscar el contenido del modal por su título
            const modalTitle = button.closest('.tarjeta').querySelector('h3').textContent.trim();
            console.log(`Título del modal: ${modalTitle}`);

            // Buscar coincidencias flexibles para el título del modal
            const modalTitleKey = Object.keys(modalContents).find(key => 
                modalTitle.includes(key.replace(/^[🔺◼📐]/g, '').trim()) || 
                key.includes(modalTitle.replace(/^[🔺◼📐]/g, '').trim())
            );
            console.log(`Clave del modal encontrada: ${modalTitleKey}`);

            const modalText = modalTitleKey ? modalContents[modalTitleKey] : null;
            console.log(`Contenido del modal: ${modalText ? 'Encontrado' : 'No encontrado'}`);

            if (modalText) {
                modalContent.innerHTML = `
                    <div class="modal-header">
                        <h2>${modalTitleKey}</h2>
                        <button class="btn-cerrar-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${modalText}
                    </div>
                `;
                
                modalOverlay.classList.add('mostrar');
                
                // Añadir evento de cierre
                const closeBtn = modalContent.querySelector('.btn-cerrar-modal');
                closeBtn.addEventListener('click', () => {
                    modalOverlay.classList.remove('mostrar');
                });
            } else {
                console.error(`No se encontró contenido para el modal: ${modalTitle}`);
                console.error('Títulos disponibles:', Object.keys(modalContents));
            }
        });
    });

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.classList.remove('mostrar');
            }
        });
    });
});
