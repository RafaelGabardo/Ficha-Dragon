let login_modal = document.getElementById('login-modal');
let cadastro_modal = document.getElementById('cadastro-modal');
let span = document.getElementsByClassName('fechar-modal');
let botao_login = document.getElementById('login');
let botao_cadastro = document.getElementById('cadastro');

botao_login.onclick = function() {
  login_modal.style.display = "flex";
}

botao_cadastro.onclick = function() {
  cadastro_modal.style.display = "flex";
}

function aperta_xis() {
   login_modal.style.display = "none";
   cadastro_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == login_modal || event.target == cadastro_modal) {
    login_modal.style.display = "none";
    cadastro_modal.style.display = "none";
  }
}