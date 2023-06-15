/*const senha = document.getElementById("validar").value;
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,8}$;/






function validarSenha(valores_digitados){

    if(regex.test(valores_digitados)){

        
        console.log("Deu Certo");
        
        let resposta = document.createElement("resposta");
        let button = document.createElement("button");
        let escrita_button = document.createTextNode("Senha OK!");
        button.appendChild(escrita_button);
        resposta.appendChild(button);
    } else{
        console.log("Fudeu");
    }

}

const valores_digitados = document.getElementById("senha").value;
valores_digitados.addEventListener("keydown", validarSenha(valores_digitados));*/


const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,8}$/

function validarSenha() {
  const senha = document.getElementById("senha").value;

  if (regex.test(senha)) {
    console.log("Deu Certo");
    let resposta = document.getElementById("resposta");
    let button = document.createElement("button");
    let escrita_button = document.createTextNode("Senha OK!");
    button.appendChild(escrita_button);
    resposta.appendChild(button);
  } else {

    alert("A senha não pode ter mais que 8 valores!!!");
    
  }
}
const inputSenha = document.getElementById("senha");
inputSenha.addEventListener("keyup", validarSenha);
