import Card from "./Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//import getProductList from '../Services/service'
import { getProductList } from "../Services/firebase";
 
import Loader from "./Loader";

function ItemListContainer(props){

    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState();

    const { categoriaId } = useParams();

    useEffect(()=>{

    setCargando(true);

    getProductList(categoriaId)
    .then((respuesta) => {
        setProductos(respuesta);  
        setCargando(false);
    })
    .catch((error) => setErrores(error))
    .finally(()=> setCargando(false))
    }, [categoriaId])

    return(
    <div className="contenedor">
        {(cargando)?<Loader/>:
        
        (errores?<div><span>No se pudo cargar la categoría.</span></div>:
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
        )    
    
    }
    </div>        
    );
}

export default ItemListContainer;