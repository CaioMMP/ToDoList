function cadastra() {
    var nome = document.getElementById("nome").value;
    var login = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmSenha = document.getElementById("confirmSenha").value;
    if ((nome.search(" ") == -1) &&
                (login.search(" ") == -1) &&
                (email.search(" ") == -1) &&
                (senha.search(" ") == -1) &&
                (confirmSenha.search(" ") == -1) &&
                (email.search("@") == -1) &&
                (email.search(".") != -1)) {
        alert("!!!Campos Vazios!!!");
    } else if (senha != confirmSenha) {
        alert("!!!Senha e Confirmação da Senha devem ser iguais!!!");
    } else {
        window.location.href = "toDoList.html";
    }
}