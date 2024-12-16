function calcularDiferenca() {
    const dataInicial = new Date(2024, 10, 12); // 12 de novembro de 2024
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
  
  function criarCoracoes() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 +