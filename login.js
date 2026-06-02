import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBDwyP3eH0m67QbzZPd8PVrUqfBDMIXYP0",
  authDomain: "cartao-sus-app.firebaseapp.com",
  projectId: "cartao-sus-app",
  storageBucket: "cartao-sus-app.firebasestorage.app",
  messagingSenderId: "436698501611",
  appId: "1:436698501611:web:22e0c6c81496a11a8649ae"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.fazerLogin = async function() {

  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  try {

    await signInWithEmailAndPassword(
      auth,
      usuario,
      senha
    );

    localStorage.setItem("logado", "true");

    window.location.href = "painel.html";

  } catch (error) {

  console.error(error);

  document.getElementById("erro").innerText =
    error.code;

}
};
