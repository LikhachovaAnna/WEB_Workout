const carousel = document.querySelector('.videos-container');
const carouselTrack = carousel.querySelector('.videos-track');
const carouselSlides = Array.from(carousel.querySelectorAll('.video-item'));
const prevButton = carousel.querySelector('.video-prev');
const nextButton = carousel.querySelector('.video-next');

let currentIndex = 0;

prevButton.addEventListener('click', showPrevSlides);
nextButton.addEventListener('click', showNextSlides);

function showPrevSlides() {
  currentIndex--;
  if (currentIndex < 0)
    currentIndex = carouselSlides.length - 3;
  updateCarousel();
}

function showNextSlides() {
  currentIndex++;
  if (currentIndex > carouselSlides.length - 3)
    currentIndex = 0;
  updateCarousel();
}

function updateCarousel() {
  const translateX = currentIndex * -(100/3);
  carouselTrack.style.transform = `translateX(${translateX}%)`;
}
