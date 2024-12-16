// Função para tocar/pausar a música
let musica = new Audio("musica/You-Are-So-Beautiful.mp3");

function tocarMusica() {
  if (musica.paused) {
    musica.play();  // Toca a música
    document.getElementById("play-button").innerText = "Pausar Música"; // Altera o texto do botão
  } else {
    musica.pause(); // Pausa a música
    document.getElementById("play-button").innerText = "Play Música"; // Restaura o texto
  }
}

// Função para exibir a explosão e os corações caindo
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

  // Função para gerar corações caindo
  gerarCoracoes();
}

// Função para gerar corações caindo
function gerarCoracoes() {
  const container = document.body; // Podemos criar os corações no body
  const numeroDeCoracoes = 10; // Quantidade de corações para cair

  for (let i = 0; i < numeroDeCoracoes; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posiciona aleatoriamente o coração na tela
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s"; // Duração aleatória de animação

    // Adiciona o coração à página
    container.appendChild(heart);

    // Remove o coração da tela após a animação
    setTimeout(() => {
      heart.remove();
    }, 3000); // O tempo precisa ser o mesmo da animação
  }
}

// Event listener para o clique no título
document.querySelector("h1").addEventListener("click", mostrarExplosao);

// Event listener para o botão de música
document.getElementById("play-button").addEventListener("click", tocarMusica);

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
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}

// Atualiza o contador a cada segundo
setInterval(calcularD
