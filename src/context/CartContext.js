import React, {createContext, useState} from "react";

export const Context = createContext();

export default function CartContext({children}) {
    
    const [cart, setCart] = useState([]);

    return (
        //Fragments
        <>
        <Context.Provider value={{cart, setCart}}>
            {children}
        </Context.Provider>
        </>
    )
}