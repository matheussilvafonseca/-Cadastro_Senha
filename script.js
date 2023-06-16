const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,8}$/

function validarSenha() {
  const senha = document.getElementById("senha").value;

  if (regex.test(senha) == false) {
    let resposta = document.getElementById("botao");
    resposta.innerHTML = ``;
  } else{

    let resposta = document.getElementById("botao");
    resposta.innerHTML = `Senha OK`;
  }
}
const inputSenha = document.getElementById("senha");
inputSenha.addEventListener("keyup", validarSenha);


