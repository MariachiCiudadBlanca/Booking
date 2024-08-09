// Toggle del menú desplegable
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});


/* Sección deslizador de imagenes que va en el home */
// main.js
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slides = document.querySelector('.slides');
    let index = 0;

    function showSlide(n) {
        const totalSlides = document.querySelectorAll('.slides img').length;
        index = (n + totalSlides) % totalSlides;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(index + 1);
    });
});