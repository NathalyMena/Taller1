// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBasLyACbbozQFnknmHsnNE5KiRegaotTc",
    authDomain: "econet-28ee4.firebaseapp.com",
    projectId: "econet-28ee4",
    storageBucket: "econet-28ee4.appspot.com",
    messagingSenderId: "127437720478",
    appId: "1:127437720478:web:1756b263e6878cb202648f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

   // login( auth, email, password);
   // if (user.isAdmin) {
   //     location.href = "./createProduct.html";

  //  }else {
  //      location.href = "./products.html";
    //}
});


async function login(email, password) {
    try {
        const {user}  = await signInWithEmailAndPassword(auth, email, password);
        
    } catch (e) {
        alert("Correo o contraseña inválida");
}

}