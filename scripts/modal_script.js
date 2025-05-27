let login_modal = document.getElementById('login-modal');
let cadastro_modal = document.getElementById('cadastro-modal');
let span = document.getElementsByClassName('fechar-modal');
let botao_login = document.getElementById('login');
let botao_cadastro = document.getElementById('cadastro');

botao_login.onclick = function() {
  login_modal.style.display = "block";
}

botao_cadastro.onclick = function() {
  cadastro_modal.style.display = "block";
}

span.onclick = function() {
  if (login_modal) {
    login_modal.style.display = "none";
  } else if (cadastro_modal) {
    cadastro_modal.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == login_modal) {
    login_modal.style.display = "none";
  } else if (event.target == cadastro_modal) {
    cadastro_modal.style.display = "none";
  }
}