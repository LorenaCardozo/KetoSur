import { useContext } from "react"
import { cartContext } from "../Storage/cartContext"

function CartItem(props){

    const { cart, eliminarDelCarrito, obtenerTotal} = useContext(cartContext)

    return(

        <div className="div-detalle-cart">

            <span className="titulo"> Total de tu compra: ${obtenerTotal()} </span>            
            {
                cart.map((item) =>  
                    (
                        <div className="cart-item" key={item.id}>
                            <div className="cart-item-deta"><img  height={50} src={item.img} alt="foto producto"/></div>
                            <div className="cart-item-deta">{item.nombre}</div>
                            <div className="cart-item-deta">${item.precio}</div>
                            <div className="cart-item-deta">Cantidad: {item.count}</div>
                            <div className="cart-item-deta">Subtotal: $ {item.count * item.precio}</div>
                            {(!props.ocultaModif)&&<div className="cart-item-deta eliminar" onClick={()=> eliminarDelCarrito(item.id) }>❌</div>}
                        </div>
                        
                    )
                
                )
            }

        </div>

    )

}


export default CartItem