import React, {createContext, useState} from "react";

export const Context = createContext();

export default function CartContext({children}) {
    
    const [cart, setCart] = useState([]);

    function addItem(item, title, quantity, price, picture){
        setCart([...cart, [{item, title, quantity, price, picture}]])
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