document.addEventListener('DOMContentLoaded', function() {
    // Función para actualizar el enlace activo
    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Remover la clase active de todos los enlaces
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Encontrar la sección actual
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });

        // Activar el enlace correspondiente
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    }

    // Escuchar el evento scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Ejecutar una vez al cargar la página
    updateActiveLink();
}); 