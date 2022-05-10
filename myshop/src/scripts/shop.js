import {db} from "./apps";
import { getProducts } from "./functions/products";

const productSection = document.getElementById("products");


async function loadProducts(){
   const firebaseProducts = await getProducts(db);
   productSection.innerHTML = "";
   firebaseProducts.forEach(product => {
       renderProduct(product);
   })
   console.log(firebaseProducts);

}

function renderProduct(item) {
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", `./product.html?id={item.id}`)

    const coverImage = item.images ? item.images[0] : "./image/noimage";

    product.innerHTML = `
    <img src="${coverImage}" alt="" class="product_image">
    <div class="product__info"> 
        <h2 class="product__name"> ${item.name} </h2>
        <h3 class="material"> ${item.material} </h3>
        <h3 class="price">  ${item.price} </h3>

    </div>`;

    productSection.appendChild(product);
}

loadProducts();