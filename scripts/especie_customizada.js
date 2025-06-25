// Declarando variáveis para os elementos do DOM
let especie_customizada = document.getElementById('especie-customizada');
let checkbox = document.getElementById('checkbox');
let select_especie = document.getElementById('especie');

// Definindo o comportamento do checkbox para habilitar/desabilitar o campo de espécie customizada
checkbox.onclick = function() {
  if (checkbox.checked) {
    especie_customizada.disabled = false;
    especie_customizada.style.backgroundColor = 'white';

    select_especie.disabled = true;
    select_especie.style.backgroundColor = '#D4D4D4';
  } else {
    especie_customizada.disabled = true;
    especie_customizada.style.backgroundColor = '#D4D4D4';

    select_especie.disabled = false;
    select_especie.style.backgroundColor = 'white';
  }
}