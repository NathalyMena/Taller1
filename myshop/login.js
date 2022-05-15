// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import firebaseConfig from "./src/utils/firebase";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);



const loginForm = document.getElementById("loginForm");

const createUserForm = document.getElementById("createUserForm");
createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = createUserForm.name.value;
  const email = createUserForm.email.value;
  const password = createUserForm.password.value;

  const newUser = {
    name,
    email,
    password,
    isAdmin: false,
  }

 
  const userCreated = await createUser(auth, newUser);
 
  await addUserToDatabase(db, userCreated.uid, newUser);

  

});

loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    login( auth, email, password);
   if (user.isAdmin) {
        location.href = "./createProduct.html";

    }else {
        location.href = "./product.html";
    }
});


async function login(email, password) {
    try {
        const {user}  = await signInWithEmailAndPassword(auth, email, password);
        
    } catch (e) {
        alert("Correo o contraseña inválida");
}

}