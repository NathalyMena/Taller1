// Import the functions you need from the SDKs you need

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
  console.log(userCreated);
  await addUserToDatabase(db, userCreated.user.uid, newUser);

  

});



async function createUser(auth, { email, password }) {

  try {
    const  user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
    

  } catch (e) {

    if (e.code === "auth/weak-password") {
      alert("Tu contraseña debe tener al menos 6 caracteres");
    }
    if (e.code === "auth/email-already-in-use") {
      alert("Este correo ya se encuentra registrado");
    }

  }
}

async function addUserToDatabase(db, userId, userInfo) {
  try {

    await setDoc(doc(db, "users", userId), userInfo);

  } catch (e) {
    console.log(e);

  }
}





