import { createContext, useState } from "react";

//1- crear un context
export const cartContext = createContext({});

//2- inicializar el provider

///const userContext = userContext.Provider;

function CartProvider(props){
    const [cart, setCart] = useState([]);

    function agregarAlCarrito(item){

        let posicion = cart.findIndex((produc)=> produc.id === item.id  )

        if (posicion === -1)
        {
        let newCart = [...cart];
        newCart.push(item);
        setCart(newCart);
        }else{
            cart[posicion].count += item.count;
        }

        //tambien se puede hacer --> setCart([...cart, item])

    }

    function eliminarDelCarrito(id){

        const newCart = cart.filter((produc)=> produc.id !== id  );
        setCart(newCart);

    }

    function obtenerTotal(){

        const subtotal = cart.map((item)=>item.precio * item.count)
        const total = subtotal.reduce((a, b) => a + b,0);

        return total;

    }

    function vaciarCarrito(){

        setCart([]);
    }


    return(
        //3- Retornamos el provider del context con un value personalizado
        <cartContext.Provider value={{cart, agregarAlCarrito, eliminarDelCarrito, obtenerTotal, vaciarCarrito}}>
            {props.children}
        </cartContext.Provider>
    )
}

export { CartProvider }

