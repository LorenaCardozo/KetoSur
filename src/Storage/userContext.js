import { createContext } from "react";

//1- crear un context
export const userContext = createContext({});

//2- inicializar el provider

///const userContext = userContext.Provider;

function UserProvider(props){
    return(
        //3- Retornamos el provider del context con un value personalizado
        <userContext.Provider value={{user: "Santiago"}}>
            {props.children}
        </userContext.Provider>
    )
}

export { UserProvider }

