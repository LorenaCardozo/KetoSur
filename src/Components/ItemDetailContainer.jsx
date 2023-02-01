import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getProduct } from "../Services/firebase";
import ItemCount from "./ItemCount";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { cartContext } from "../Storage/cartContext";
import Loader from "./Loader";

function ItemDetailContainer(){

    const [ producto, setProducto] = useState({});
    const [ sumaAlCarrito, setSumaAlCarrito ] = useState(false);
    const [ errores, setErrores] = useState();
    const [ cargando, setCargando] = useState(true);

    const { productoId } = useParams();

    const { agregarAlCarrito } = useContext(cartContext); //nos conectamos al cartContext

    const navigate = useNavigate();

    function handlerVerCarrito(){

        navigate ("/cart");
        
    }

    function handlerAgregarAlCarrito(count){
        setSumaAlCarrito(true)
        producto.count = count;
        agregarAlCarrito(producto);
        toast.success('Se agregó el producto al carrito', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
            });

    }

    useEffect(()=>{

    setCargando(true);   
         
    getProduct(productoId)
    .then((respuesta) => {
        setProducto(respuesta);  
        setCargando(false);
    })
    .catch((error) => setErrores(error))
    .finally(setCargando(false))
    }, [productoId])


    return(
        (cargando)?<Loader/>:(
        (errores)?<div><span className="titulo"> No se pudo cargar el producto. </span></div>:
        <div className="div-detalle">
            <section className="section-detalle-img"> 
            <p>{producto.nombre}</p>    
                <img height={650} src={producto.imgDetails} alt="foto producto"></img>
                <span>Precio: $ {producto.precio}</span>
                {(!sumaAlCarrito )?<ItemCount onClick={handlerAgregarAlCarrito} stock={producto.stock}/>:<button className="bt-count" onClick={handlerVerCarrito}>Ir al Carrito</button>
                }
            </section>
            <ToastContainer />
            
        </div>)
    )
}

export default ItemDetailContainer;