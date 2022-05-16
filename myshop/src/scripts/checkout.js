import { db } from "./apps";
import { doc, getDoc } from "firebase/firestore";


async function getUser(id) {

    const docRef = doc(db, "users", id);

    try {

        const docSnap = await getDoc(docRef);
        const user = docSnap.data();
        console.log(user)
        document.getElementById("nombreUsuario").innerText=user.name;

        return user;

    }catch(e){
        console.log(e);
    }
}


const id = localStorage.getItem("idUser");
getUser(id);