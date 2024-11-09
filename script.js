let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".testimonial-slide");
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 4000);

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});
