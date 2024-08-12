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

// Animar elementos cuando entran en la vista.

// main.js
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Check visibility on load
});


// Lightbox JavaScript sirve para abrir las imágenes de paquetes y tiene los controles para ir hacia siguiente y anterior imagen
document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementsByClassName('lightbox-close')[0];
    const prevBtn = document.getElementsByClassName('lightbox-prev')[0];
    const nextBtn = document.getElementsByClassName('lightbox-next')[0];
    const images = document.querySelectorAll('.lightbox-trigger');
    let currentIndex = 0;

    function showImage(index) {
        if (index >= 0 && index < images.length) {
            lightboxImg.src = images[index].src;
            currentIndex = index;
        }
    }

    images.forEach((item, index) => {
        item.addEventListener('click', () => {
            lightbox.style.display = "block";
            showImage(index);
        });
    });

    closeBtn.onclick = function() {
        lightbox.style.display = "none";
    }

    prevBtn.onclick = function() {
        showImage(currentIndex - 1);
    }

    nextBtn.onclick = function() {
        showImage(currentIndex + 1);
    }

    lightbox.onclick = function(event) {
        if (event.target !== lightboxImg && event.target !== prevBtn && event.target !== nextBtn) {
            lightbox.style.display = "none";
        }
    }
});

// inicio galería de imagenes mariachi
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('custom-lightbox');
    const lightboxImg = document.getElementById('custom-lightbox-img');
    const galleryItems = document.querySelectorAll('.custom-gallery-item img');
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showCustomLightbox(item.src);
        });
    });

    function showCustomLightbox(src) {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        updateCustomNavigation();
    }

    function hideCustomLightbox() {
        lightbox.style.display = 'none';
    }

    function updateCustomNavigation() {
        const prevBtn = document.querySelector('.custom-prev');
        const nextBtn = document.querySelector('.custom-next');

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
            lightboxImg.src = galleryItems[currentIndex].src;
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
            lightboxImg.src = galleryItems[currentIndex].src;
        });
    }

    document.querySelector('.custom-close').addEventListener('click', hideCustomLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideCustomLightbox();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('custom-lightbox');
    const lightboxImg = document.getElementById('custom-lightbox-img');
    const galleryItems = document.querySelectorAll('.custom-gallery-item img');
    let currentIndex = 0;

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            showCustomLightbox(item.src);
        });
    });

    function showCustomLightbox(src) {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
        updateCustomNavigation();
    }

    function hideCustomLightbox() {
        lightbox.style.display = 'none';
    }

    function updateCustomNavigation() {
        const prevBtn = document.querySelector('.custom-prev');
        const nextBtn = document.querySelector('.custom-next');

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
            lightboxImg.src = galleryItems[currentIndex].src;
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
            lightboxImg.src = galleryItems[currentIndex].src;
        });

        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowLeft') {
                    prevBtn.click();
                } else if (e.key === 'ArrowRight') {
                    nextBtn.click();
                }
            }
        });
    }

    document.querySelector('.custom-close').addEventListener('click', hideCustomLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            hideCustomLightbox();
        }
    });
});



// fin galería de imagenes mariachi


//paquetes ofertados 
// Lista de imágenes de paquetes de serenatas
const serenataImages = [
    { src: 'images/MariachiCiudadBlanca.jpg', alt: 'Paquete de serenata con Mariachi Ciudad Blanca' },
    { src: 'images/MariachiPopayan.jpg', alt: 'Paquete de serenata con Mariachi Popayán' },
    { src: 'images/MariachisPopayán.jpg', alt: 'Paquete de serenata con Mariachis Popayán' },
    { src: 'images/MariachiProfesional.jpg', alt: 'Paquete de serenata con Mariachi Profesional' }
];

let currentImageIndex = 0;

function openSerenataLightbox(index) {
    currentImageIndex = index;
    updateSerenataLightbox();
    document.getElementById('serenata-lightbox').style.display = 'flex';
}

function closeSerenataLightbox() {
    document.getElementById('serenata-lightbox').style.display = 'none';
}

function changeSerenataImage(direction) {
    currentImageIndex = (currentImageIndex + direction + serenataImages.length) % serenataImages.length;
    updateSerenataLightbox();
}

function updateSerenataLightbox() {
    const lightboxImage = document.getElementById('serenata-lightbox-image');
    lightboxImage.src = serenataImages[currentImageIndex].src;
    lightboxImage.alt = serenataImages[currentImageIndex].alt;
}

document.getElementById('serenata-lightbox-close').addEventListener('click', closeSerenataLightbox);
document.getElementById('serenata-lightbox-prev').addEventListener('click', () => changeSerenataImage(-1));
document.getElementById('serenata-lightbox-next').addEventListener('click', () => changeSerenataImage(1));

document.getElementById('serenata-lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeSerenataLightbox();
    }
});

document.addEventListener('keydown', function(event) {
    if (document.getElementById('serenata-lightbox').style.display === 'flex') {
        if (event.key === 'ArrowLeft') {
            changeSerenataImage(-1);
        } else if (event.key === 'ArrowRight') {
            changeSerenataImage(1);
        } else if (event.key === 'Escape') {
            closeSerenataLightbox();
        }
    }
});


//fin paquetes ofertados


//repertorio


//fin repertorio