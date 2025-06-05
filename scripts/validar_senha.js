let senha = document.getElementById('cadastro-senha');
let padrao = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

function valida_senha() {
  let valor_senha = senha.value;

  if (!padrao.test(valor_senha)) {
    alert('A senha não corresponde ao padrão correto: pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 símbolo e 1 número');

    return false;
  }

  return true;
}