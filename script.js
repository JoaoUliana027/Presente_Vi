// Contador de tempo
const startDate = new Date('2024-11-12T00:00:00');
const daysBox = document.getElementById('days');
const hoursBox = document.getElementById('hours');
const minutesBox = document.getElementById('minutes');
const secondsBox = document.getElementById('seconds');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  daysBox.innerText = days;
  hoursBox.innerText = hours;
  minutesBox.innerText = minutes;
  secondsBox.innerText = seconds;
}

setInterval(updateTimer, 1000);

// Carrossel de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

function updateCarousel() {
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Navegação para a página especial
function goToSpecialPage() {
  window.location.href = 'fotos-especiais.html';
}
