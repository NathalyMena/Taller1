/* import { auth, db } from "../scripts/apps";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/functionCart.js";
import { addProductToCart } from "../utils";
import { getMyLocalCart, currencyFormat } from "../utils/index";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const createOrder = async (userFields) => {
    try {
        const order = await addDoc(collection(db, "orders"), {
            ...userFields, // spread 
            products: cart,
            total,
            email: userLogged.email,
            status: "pending",
        });
        alert(`Muchas gracias, tu pedido con ID: ${order.id} ha quedado registrado.`);

        deleteCart();
    } catch (e) {
        console.log(e)
    }
};*/