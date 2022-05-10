

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import firebaseConfig from "../utils/firebase";

import { addProduct, uploadImages } from "./functions/addProduct";


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);



const createProductForm = document.getElementById("createProductForm");

createProductForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = createProductForm.name.value;
    const description = createProductForm.description.value;
    const price = createProductForm.price.value;
    const material = createProductForm.material.value;
    const images = createProductForm.images.files;

    let gallery = [];

    if (images.length) {
        const uploadedImages = await uploadImages(storage, [...images]);
        
        gallery = await Promise.all(uploadedImages);
    }

    const newProduct = {
        name,
        description,
        price,
        material,
        images: gallery,
    };

    await addProduct(db, newProduct);


});