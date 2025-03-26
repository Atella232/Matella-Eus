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
document.addEventListener('DOMContentLoaded', function() {
    // Variables para el menú móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdown = document.querySelector('.dropdown');
    
    // Crear el botón de hamburguesa si no existe
    if (!menuToggle) {
        const navbarLogo = document.querySelector('.navbar-logo');
        const toggle = document.createElement('div');
        toggle.className = 'menu-toggle';
        
        // Crear las tres líneas del icono hamburguesa
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            toggle.appendChild(span);
        }
        
        // Añadir el botón a la navbar
        const navbarLogoContainer = document.createElement('div');
        navbarLogoContainer.className = 'navbar-logo-container';
        navbarLogoContainer.style.display = 'flex';
        navbarLogoContainer.style.justifyContent = 'space-between';
        navbarLogoContainer.style.width = '100%';
        navbarLogoContainer.style.alignItems = 'center';
        
        // Clonar el texto del logo para mantenerlo
        const logoText = navbarLogo.cloneNode(true);
        
        // Reemplazar el navbar-logo existente
        navbarLogo.parentNode.insertBefore(navbarLogoContainer, navbarLogo);
        navbarLogo.remove();
        
        // Añadir el logo y el toggle al contenedor
        navbarLogoContainer.appendChild(logoText);
        navbarLogoContainer.appendChild(toggle);
        
        // Actualizar la referencia al botón de hamburguesa
        const menuToggle = toggle;
        
        // Evento de clic para mostrar/ocultar el menú
        menuToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
    }
    
    // Gestión del dropdown en dispositivos móviles
    if (window.innerWidth <= 768) {
        // Prevenir que el dropdown se muestre en hover en móviles
        if (dropdown) {
            // Eliminar comportamiento hover para móviles
            dropdown.addEventListener('click', function(e) {
                if (e.target === dropdownBtn) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    }
    
    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        const isNavbar = e.target.closest('.navbar');
        const isMenuToggle = e.target.closest('.menu-toggle');
        
        if (!isNavbar && !isMenuToggle && navbarMenu.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
        
        // Cerrar dropdown si se hace clic fuera
        const isDropdown = e.target.closest('.dropdown');
        if (!isDropdown && dropdown && dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
        }
    });
    
    // Redimensionamiento de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Restaurar estado normal en desktop
            navbarMenu.classList.remove('active');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        }
    });
});