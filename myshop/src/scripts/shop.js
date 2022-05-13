import {db} from "./apps";
import { getProducts } from "./functions/products";
import { currencyFormat } from "../utils";

const productSection = document.getElementById("products");
const categoryFilter = document.getElementById("material");
const orderFilter = document.getElementById("order");

let products = [];

async function loadProducts(){
   const firebaseProducts = await getProducts(db);
   productSection.innerHTML = "";
   firebaseProducts.forEach(product => {
       renderProduct(product);
   });

   products = firebaseProducts;


}

function renderProduct(item) {
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", './product.html?id='+item.id)

    const coverImage = item.images ? item.images[0] : "./image/noimage";

    product.innerHTML = `
    <img src="${coverImage}" alt="" class="product_image">
    <div class="product__info"> 
        <h2 class="product__name"> ${item.name} </h2>
        <h3 class="material"> ${item.material} </h3>
        <h3 class="price">  ${currencyFormat(item.price)} </h3>

    </div>`;

    productSection.appendChild(product);
}

function filterBy(){
    
    const newCategory = categoryFilter.value;
    const newOrder = orderFilter.value;
   
    let filteredProducts = [];

    if (newCategory !== ""){

        filteredProducts = products.filter((product) => product.material === newCategory); 
        console.log(filteredProducts);   
        
        
    } else {
        filteredProducts = products;
        
    }

    if (newOrder === "desc"){
        filteredProducts = filteredProducts.sort((a,b) => a.price - b.price);
    }

    if (newOrder === "asc"){
        filteredProducts = filteredProducts.sort((a,b) => b.price - a.price);
    }

    productSection.innerHTML= "";
    filteredProducts.forEach(product => {
        renderProduct(product);
    });

   

}

categoryFilter.addEventListener("change", e => {
   filterBy();
});

orderFilter.addEventListener("change", e => {
    filterBy();
 })


loadProducts();