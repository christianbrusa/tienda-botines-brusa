import React, {createContext, useState} from "react";

export const Context = createContext();

export default function CartContext({children}) {
    
    const [cart, setCart] = useState([]);

    function addItem(item, title, quantity, price, picture){
        let seEncuentra = cart.some(e => e.item == item);
        seEncuentra ? window.alert("Este producto ya se encuentra cargado") : setCart([...cart, {item, title, quantity, price, picture}]);
    }

    function removeItem(itemId){
        let newCart = cart.filter(x => x.item != itemId);
        setCart(newCart)
    }

    return (
        //Fragments
        <>
        <Context.Provider value={{cart, setCart, addItem, removeItem}}>
            {children}
        </Context.Provider>
        </>
    )
}