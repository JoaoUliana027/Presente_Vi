// Função para tocar/pausar a música
let musica = new Audio("musica/You-Are-So-Beautiful.mp3");

function tocarMusica() {
  if (musica.paused) {
    musica.play();  // Toca a música
  } else {
    musica.pause(); // Pausa a música
  }
}

// Função para exibir a explosão
function mostrarExplosao() {
  const explosion = document.getElementById("explosion");
  const explosionText = document.getElementById("explosion-text");

  // Exibe a explosão
  explosion.style.display = "flex";
  explosionText.classList.remove("hidden");
  explosionText.classList.add("show");

  // Esconde a explosão após 3 segundos
  setTimeout(() => {
    explosion.style.display = "none";
    explosionText.classList.add("hidden");
    explosionText.classList.remove("show");
  }, 3000);
}

// Event listener para o clique no título
document.querySelector("h1").addEventListener("click", mostrarExplosao);

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

  document.getElementById("anos").innerText = anos;
  document.getElementById("meses").innerText = meses;
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document
