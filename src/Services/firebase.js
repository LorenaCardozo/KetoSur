import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBmj4JY0FuVVVADq1l0m9jObJoH0QoKzjs",
    authDomain: "ketosur-379ff.firebaseapp.com",
    projectId: "ketosur-379ff",
    storageBucket: "ketosur-379ff.appspot.com",
    messagingSenderId: "568725569204",
    appId: "1:568725569204:web:42167afc39090da6fd21e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

async function getProductList (categoriaId) {

    const productsRef = collection(database, "products");
    let docsnap;

    if (categoriaId){
        const q = query(productsRef, where("categoria", "==", categoriaId ))
        docsnap = await getDocs(q);
    }
    else{
        docsnap = await getDocs(productsRef);
    }

    const productos = docsnap.docs.map( item =>{
                let prod = item.data();
                prod.id = item.id;
                return prod;
                }
            );

    return productos;

};

async function getProduct (idProduct){

    const productsRef = collection(database, "products");
    const docRef = doc(productsRef, idProduct)

    const snapshot = await getDoc(docRef);

    let prod = snapshot.data()
    prod.id = idProduct;

    return prod;

}

async function crearOrden(order){
 const orderRef = collection(database, "orders");
 let respuesta = await addDoc(orderRef , order)

 return respuesta.id;

}


export default database;

export {getProductList, getProduct, crearOrden };