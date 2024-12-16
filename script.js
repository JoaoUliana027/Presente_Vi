// Função para calcular o tempo decorrido
function calcularDiferenca() {
  // Definir data inicial como 12 de novembro de 2024 às 00:00:00
  const dataInicial = new Date(2024, 10, 12, 0, 0, 0); // 12 de novembro de 2024 às 00:00:00
  const agora = new Date();

  const diferenca = agora - dataInicial;
  const segundosTotais = Math.floor(diferenca / 1000);
  const minutosTotais = Math.floor(segundosTotais / 60);
  const horasTotais = Math.floor(minutosTotais / 60);
  const diasTotais = Math.floor(horasTotais / 24);

  const anos = Math.floor(diasTotais / 365);
  const meses = Math.floor((diasTotais % 365) / 30);
  const dias = Math.floor((diasTotais % 365) % 30);

  const horas = horasTotais % 24;
  const minutos = minutosTotais % 60;
  const segundos = segundosTotais % 60;

  document.getElementById("anos").innerText = anos;
  document.getElementById("meses").innerText = meses;
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

setInterval(calcularDiferenca, 1000);

  
  // Função para mostrar a explosão
  function mostrarExplosao() {
    const explosao = document.getElementById("explosao");
    explosao.style.display = "block";
  
    // Adiciona animação de aparecer e desaparecer
    explosao.style.animation = "aparecer-desaparecer 3s ease";
  
    // Oculta a explosão após 3 segundos
    setTimeout(() => {
      explosao.style.display = "none";
      explosao.style.animation = ""; // Reseta a animação
    }, 3000);
  }
  
  // Evento de clique no título
  document.getElementById("titulo").addEventListener("click", mostrarExplosao);
  
  // Função para criar corações animados
  function criarCoracoes() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  // Gera corações a cada 300ms
  setInterval(criarCoracoes, 300);
  
// Obtém o botão e o player de áudio
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Função para tocar a música
document.getElementById('playButton').addEventListener('click', function() {
  var audioPlayer = document.getElementById('audioPlayer');
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
});

