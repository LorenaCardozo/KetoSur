import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../Services/service";
import ItemCount from "./ItemCount";

function ItemDetailContainer(){

    const [ producto, setProducto] = useState({});

    const { productoId } = useParams();

    useEffect(()=>{
    getProduct(productoId)
    .then((respuesta) => {
        setProducto(respuesta);  
    })
    .catch((error) => alert(error))
    }, [productoId])


    return(
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.imgDetails}></img>
            <ItemCount stock={producto.stock}/>
        </div>
    )
}

export default ItemDetailContainer;