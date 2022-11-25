function cadastra() {
    var nome = document.getElementById("nome").value;
    var login = document.getElementById("login").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmSenha = document.getElementById("confirmSenha").value;
    var btn = document.getElementById("btn");
    var principal1 = document.getElementById("principal1");
    var principal2 = document.getElementById("principal2");
    var btnMostrar = document.getElementById("mostrar");
    var sair = document.getElementById("sair");
    sair.addEventListener("click", function() {
        principal1.style.display = "block";
        principal2.style.display = "none";
    });
    btnMostrar.addEventListener("click", function() {
        alert("Nome: " + nome + "\n" + "Login: " + login + "\n" + "E-mail :" + email + "\n" + "Senha: " + senha);
    });

    if ((senha == "") || (nome == "") || (login == "") || (email == "") || (confirmSenha == "")) {
        alert("ERROR! - Campos Vazios");
    } else if (email.search("@") == -1) {
        alert("ERROR! - E-mail inválido_Verifique se há '@'");
    } else if (senha != confirmSenha) {
        alert("ERROR! - Senha e Confirmação da Senha devem ser iguais");
    } else {
        btn.addEventListener("click", function() {
            principal1.style.display = "none";
            principal2.style.display = "block";
        });
    }
}