// Declarando Variáveis para controlar os modais de login e cadastro
let login_modal = document.getElementById('login-modal');
let cadastro_modal = document.getElementById('cadastro-modal');
let span = document.getElementsByClassName('fechar-modal');
let botao_login = document.getElementById('login');
let botao_cadastro = document.getElementById('cadastro');

// Adicionando evento de clique no botão de aparecer do modal de login
botao_login.onclick = function() {
  login_modal.style.display = "flex";
}

// Adicionando evento de clique no botão de aparecer do modal de cadastro
botao_cadastro.onclick = function() {
  cadastro_modal.style.display = "flex";
}

// Adicionando evento de clique no botão de fechar do modal
function aperta_xis() {
   login_modal.style.display = "none";
   cadastro_modal.style.display = "none";
}

// Adicionando evento de clique para fechar o modal se clicar fora dele
window.onclick = function(event) {
  if (event.target == login_modal || event.target == cadastro_modal) {
    login_modal.style.display = "none";
    cadastro_modal.style.display = "none";
  }
}