// Contador de tempo
const startDate = new Date('2024-11-12T00:00:00');
const timerElement = document.getElementById('timer');

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerElement.innerText = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}

setInterval(updateTimer, 1000);

// Navegação para página especial
function goToSpecialPage() {
  window.location.href = 'fotos-especiais.html';
}
