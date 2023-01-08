import Card from "./Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import getProductList from '../Services/service'

function ItemListContainer(props){

    const [productos, setProductos] = useState([]);

    const { categoriaId } = useParams();

    /*
    const productos =[{id:1, nombre:'Budín marmolado', img: '/img/budin.png', precio:1500},
                      {id:2,nombre:'Pan Burger Keto', img: '/img/pan.png', precio:1300}, 
                      {id:3,nombre:'Box de galletitas', img: '/img/galletitas.png', precio:900},
                      {id:4,nombre:'Conitos Keto', img: '/img/conitos.png', precio:1100},
                      {id:5,nombre:'Tarta de Ricota', img: '/img/tarta.png', precio:2500},
                    ]
    */

    useEffect(()=>{
    getProductList(categoriaId)
    .then((respuesta) => {
        setProductos(respuesta);  
    })
    .catch((error) => alert(error))
    }, [categoriaId])

    return(
        
        <>
        <h2 style={{color:"grey", textAlign:"center", fontSize:"2rem" }}>{props.greeting}</h2>
        <div className="listaProductos">
            { 
                productos.map((producto) => {
                    return <Card key = {producto.id}  item = {producto}/>
                })
                    
            }
        </div>
        </>
    );
}

export default ItemListContainer;