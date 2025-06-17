// Declrando variáveis para os elementos HTML
let quantidade = document.getElementById('quantidade');
let resultado_dado = document.getElementById('resultado-dado');
let resultado_cada_dado = document.getElementById('resultado-cada-dado');
let d4 = document.getElementById('d4');
let d6 = document.getElementById('d6');
let d8 = document.getElementById('d8');
let d10 = document.getElementById('d10');
let d12 = document.getElementById('d12');
let d20 = document.getElementById('d20');
let d100 = document.getElementById('d100');

// Fazendo a função que deve rolar o dado
function rolar_dado(numero_de_lados) {
  // Declarando uma variável para armazenar os resultados
  let resultados = [];
  // Declarando uma variável para garantir que a quantidade de rolagens seja válida
  let quantidade_rolagens = parseInt(quantidade.value);

  // Verificando se a quantidade de rolagens é um número válido
  if (isNaN(quantidade_rolagens) || quantidade_rolagens <= 0) {
    alert('Quantidade de dados a serem rolados não informada!');
    return;
  }

  // Declarando uma variável para armazenar a soma dos resultados
  let soma_resultados = 0;

  // Fazendo um loop para rolar o dado a quantidade de vezes especificada
  for (let i = 0; i < quantidade_rolagens; i++) {
    let numero_aleatorio = Math.floor(Math.random() * numero_de_lados) + 1;
    resultados.push(numero_aleatorio);
    soma_resultados += numero_aleatorio;
  }

  // Exibe os resultados de cada dado com base na quantidade de rolagens
  if (quantidade_rolagens > 1) {
    resultado_cada_dado.textContent = 'Resultados: ' + resultados.join(', ');
  }

  // Exibe a soma dos resultados
  resultado_dado.textContent = soma_resultados;
}