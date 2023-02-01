import { useContext } from "react";
import { cartContext } from "../Storage/cartContext";

function CartWidget(){

    const contexto = useContext(cartContext);

    return(
        <div className="div-carrito">
        <img className="carrito" src={`/img/cart.png`} alt="foto producto"/>
        {contexto.cart.length > 0 &&<span className="cant-carrito">{contexto.cart.length}</span>
        }
        </div>
    )
}

export default CartWidget;