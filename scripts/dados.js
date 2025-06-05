let quantidade = document.getElementById('quantidade');
let resultado_dado = document.getElementById('resultado-dado');
let d4 = document.getElementById('d4');
let d6 = document.getElementById('d6');
let d8 = document.getElementById('d8');
let d10 = document.getElementById('d10');
let d12 = document.getElementById('d12');
let d20 = document.getElementById('d20');
let d100 = document.getElementById('d100');

function rolar_dado(numero_de_lados) {
  let quantidade_rolagens = parseInt(quantidade.value);

  if (isNaN(quantidade_rolagens) || quantidade_rolagens <= 0) {
    alert('Quantidade de dados a serem rolados não informada!');
    return;
  }

  let soma_resultados = 0;

  for (let i = 0; i < quantidade_rolagens; i++) {
    let numero_aleatorio = Math.floor(Math.random() * numero_de_lados) + 1;
    soma_resultados += numero_aleatorio;
  }

  resultado_dado.textContent = soma_resultados;
}