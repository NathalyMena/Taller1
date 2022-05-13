import { onAuthStateChanged } from "firebase/auth";
import { getProduct } from "./functions/getProduct";
import { auth, db } from "./apps";
import { getMyLocalCart, addProductToCart, currencyFormat } from "../utils";


import { getFirebaseCart } from "./functions/functionCart";

const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");

let userLogged = undefined;
let cart = [];
function getParam(param) {

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;

}

async function loadProduct() {
    const productId = getParam("id");

    const data = await getProduct(productId);

    console.log(data)
    const product = {
        ...data,
        id: productId,


    }

    renderProduct(product);

}

function renderProduct(product) {

    productAssetsSection.innerHTML = `<img class="product__mainImage" src= "${product.images[0]}">`;

    const isProductAddedToCart = cart.some((productCart) => productCart.id === product.id);

    const productButtonCart = isProductAddedToCart ?
    '<button class="product__cart" disabled>Producto añadido</button>' :
    '<button class="product__cart">Añadir al carrito</button>';


    productInfoSection.innerHTML =
        `<h1 class="product__name"> ${product.name} </h1>
    <p class="product__description"> ${product.description} </p>
    <h3 class="product__price"> ${currencyFormat(product.price)} </h3>
    ${productButtonCart}`;
    
    const productCartButton = document.querySelector(".product__cart");
    productCartButton.addEventListener("click", e => {
        cart.push(product);

        addProductToCart(cart);

        if (userLogged) {
            createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText = "Producto añadido";
    });




}
    


onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        userLogged = user;
        cart = await getFirebaseCart(db, userLogged.uid);
        console.log(cart);
        // ...
    } else {
        cart = getMyLocalCart();
        // User is signed out
        // ...
    }

    loadProduct();

});
