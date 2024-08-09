// main.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('visible');
    });
});

// main.js
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    let index = 0;

    // Función para mostrar el slide actual
    function showSlide(n) {
        const totalSlides = document.querySelectorAll('.slides img').length;
        index = (n + totalSlides) % totalSlides;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    // Evento para el botón anterior
    prevButton.addEventListener('click', function() {
        showSlide(index - 1);
    });

    // Evento para el botón siguiente
    nextButton.addEventListener('click', function() {
        showSlide(index + 1);
    });

    // Toggle del menú desplegable
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Inicialización del slider
    showSlide(index);
});
