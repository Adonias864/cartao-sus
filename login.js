const usuarios = [
  {
    login: "admin",
    senha: "123456"
  },

  {
    login: "cliente1",
    senha: "abc123"
  },

  {
    login: "manoel",
    senha: "19922026"
  }

];

function fazerLogin(){

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  const usuarioEncontrado = usuarios.find(user =>
    user.login === usuario &&
    user.senha === senha
  );

  if(usuarioEncontrado){

    localStorage.setItem("logado", "true");

    window.location.href = "painel.html";

  }else{

    document.getElementById("erro").innerText =
      "Usuário ou senha inválidos";

  }

}
