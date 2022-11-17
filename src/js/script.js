var nome;
var login;
var email;
var senha;
var confirmSenha;
function cadastra() {
    nome = document.getElementById("nome").value;
    login = document.getElementById("login").value;
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;
    confirmSenha = document.getElementById("confirmSenha").value;
    if (email.search("@") == -1) {
        alert("ERROR! - E-mail inválido_Verifique se há '@'");
    } else if ((senha == "") || (nome == "") || (login == "") || (email == "") || (confirmSenha == "")) {
        alert("ERROR! - Campos Vazios");
    } else if (senha != confirmSenha) {
        alert("ERROR! - Senha e Confirmação da Senha devem ser iguais");
    } else {
        window.location.href = "toDoList.html";
    }
}