let especie_customizada = document.getElementById('especie-customizada');
let checkbox = document.getElementById('checkbox');

checkbox.onclick = function() {
  if (checkbox.checked) {
    especie_customizada.disabled = false;
  }
}