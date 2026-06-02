import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut
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

onAuthStateChanged(auth, (user) => {

  if (user) {

    document.body.style.display = "block";

  } else {

    window.location.href = "index.html";

  }

});

window.logoutFirebase = async function() {

  await signOut(auth);

  localStorage.clear();

  window.location.href = "index.html";
};
