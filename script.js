// Função para calcular a diferença de tempo
function calcularDiferenca() {
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

  // Atualiza os valores no HTML
  document.getElementById("anos").innerText = anos;
  document.getElementById("meses").innerText = meses;
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

// Atualiza o contador a cada segundo
setInterval(calcularDiferenca, 1000);

// Função para criar a explosão de coração
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

// Cria corações caindo a cada 300ms
setInterval(criarCoracoes, 300);

// Função para mostrar o efeito de explosão
function mostrarExplosao() {
  const explosion = document.getElementById("explosion");
  const explosionText = document.getElementById("explosion-text");

  // Exibe a explosão
  explosion.style.display = "flex";

  // Efeito de animação
  explosionText.classList.remove("hidden");

  // Esconde a explosão após 3 segundos
  setTimeout(() => {
    explosion.style.display = "none";
    explosionText.classList.add("hidden");
  }, 3000);
}

// Função para tocar música
let musica = new Audio("musica/You-Are-So-Beautiful.mp3");

function tocarMusica() {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
}

// Adiciona o evento de clique no coração para a explosão
document.querySelector("h1").addEventListener("click", mostrarExplosao);

// Adiciona o evento de clique no botão de play para a música
document.querySelector("#play-button").addEventListener("click", tocarMusica);
