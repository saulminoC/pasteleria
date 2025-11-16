// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Actualizar el año en el footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        // Usamos textContent en lugar de innerHTML por seguridad
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- 2. Funcionalidad del Menú Hamburguesa ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Alternar clases 'active' para mostrar/ocultar menú y animar el botón
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');

            // Accesibilidad: Actualizar aria-label
            if (navToggle.classList.contains('active')) {
                navToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                navToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    }

    // --- 3. Cerrar menú al hacer clic en un enlace (en móvil) ---
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    });

});