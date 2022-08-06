import React, {createContext, useState} from "react";

export const Context = createContext();

export default function CartContext({children}) {
    
    const [cart, setCart] = useState([]);

    function addItem(item, quantity){
        setCart([{item, quantity}])
    }

    return (
        //Fragments
        <>
        <Context.Provider value={{cart, setCart, addItem}}>
            {children}
        </Context.Provider>
        </>
    )
}