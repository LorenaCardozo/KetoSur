import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { crearOrden } from "../Services/firebase";
import { cartContext } from "../Storage/cartContext";
import CartItem from "./CartItem";
import Contacto from "./Contacto";

function Cart(props){

    const { cart, obtenerTotal, vaciarCarrito} = useContext(cartContext);

    const [inicioCompra, setInicioCompra] = useState(false);

    const navigate = useNavigate();

    function iniciarCompra(){
        setInicioCompra(true);
    }

    function finalizarCompra(userData){

        const items = cart.map( item => ( { id: item.id, precio: item.precio, count: item.count,  nombre: item.nombre} ) )

        const orden ={
            comprador:{
                nombre:userData.Nombre,
                mail: userData.Email,
                telefono:userData.Telefono,
                direccion: userData.Direccion
            },
            items:items, // o podemos mandar directamente el cart
            total: obtenerTotal(),
            date: new Date()
        }

        crearOrden(orden).then(id => {
            vaciarCarrito();
            navigate(`/finished/${id}`)
        }
            );
    }

    return(
        <div className="cart">
            {cart.length > 0?
            <>
                <h2 className="titulo">Tu carrito de compras</h2>
                <div className="cart-detalle">
                {(inicioCompra)&&<Contacto onFinished = {finalizarCompra}/>}
                <CartItem  ocultaModif = {inicioCompra} />
                
                </div>

                {(!inicioCompra)&&
                <div className="div-btn-cart">
                    <button className="bt-count" onClick={iniciarCompra}>Iniciar Compra</button>
                    <Link to={'/'}><button className="bt-count"> Seguir Comprando</button></Link>
                </div>
                }
            </>
            :<div className="div-centro">
            <h2>Tu carrito esta vacío</h2>
            </div>
            }
        </div>

    );
}

export default Cart;