let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextButton = document.getElementById('nextButton');

nextButton.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
});
