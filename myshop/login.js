// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

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



loginForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = loginForm.email.value;
    console.log(email);
    const password = loginForm.password.value;

    await login(email, password);




});


async function login(email, password) {

    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        user = response.user;
        localStorage.setItem("idUser", user.uid)


        if (email === "natamena2001@gmail.com") {
            location.href = "./createProduct.html";
        } else {
            location.href = "./shopLogin.html";
        }


    } catch (e) {
        alert("Correo o contraseña inválida");
    }





}

