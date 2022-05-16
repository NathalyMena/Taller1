import { auth, db } from "../scripts/apps";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/functionCart.js";
import { addProductToCart } from "../utils";
import { getMyLocalCart, currencyFormat } from "../utils/index";

const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("total");
let cart = [];
let userLogged;

function loadCart(cart) {
    let total = 0;
    cart.forEach(product => {
        renderProduct(product);
        total += parseInt(product.price);
    });

    totalSection.innerText = currencyFormat(total);
};

async function removeProduct(productId) {
    const newCart = cart.filter(product => product.id !== productId);
    
    cart = newCart;

    if (userLogged ) {
        await createFirebaseCart(db, userLogged.uid, newCart);
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);

}


function renderProduct(product) {
    const productCart = document.createElement("li");
    productCart.className = "product";
    productCart.innerHTML = `

    
    <img src="${product.images[0]}" class="product__image"> 
    <div class ="product__info"> <h3 class="product__name">${product.name}</h3>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    <div>  <button class="product__delete">Eliminar producto</button> </div>
     </div>
     


    
    
    
    `;

    cartSection.appendChild(productCart);

    productCart.addEventListener("click", e => {
         if (e.target.tagName === "BUTTON") {
             console.log("remove it!");
             removeProduct(product.id);
         }
    })
};

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
    } else {
        cart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadCart(cart);

  });

const payForm = document.querySelector('.payForm');
let total;

payForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const productIds = [];
    cart.forEach((data)=>{
        productIds.push(data.id);
    });

    const order = {
        nombre: payForm.userName.value,        
        numDoc: payForm.userCC.value,
        direccion: payForm.userAdress.value,
       
    }

    ORDERS_COLLECTION.add(order)
    .then((docRef)=>{
        console.log(docRef.id);
        
        CART_COLLECTION.doc(loggedUser.uid).set({
            cart: [],
        });
        location.href = './thanks.html';
    });
    
    console.log(order);

})