const sideMenu = document.querySelector('.side-menu')
const mainContent = document.querySelector('.main-content')

document.querySelector('.menu-toggle').addEventListener('click', () => {
    if (sideMenu.style.left === '-250px') {
        sideMenu.style.left = '0'
        mainContent.style.marginLeft = '250px'
    } else {
        sideMenu.style.left = '-250px'
        mainContent.style.marginLeft = '0'
    }
})
// script.js

const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto advance the carousel
setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
