import React, {createContext, useState} from "react";
import {toast} from "react-toastify";

export const Context = createContext();

export default function CartContext({children}) {
    
    const [cart, setCart] = useState([]);

    function addItem(item, title, quantity, price, picture){
        let seEncuentra = cart.some(e => e.item == item);
        seEncuentra ? toast.warn("El producto ya se encuentra cargado", {autoClose: 1000})
        : toast.success("El producto se cargo correctamente", {autoClose: 1000}) && setCart([...cart, {item, title, quantity, price, picture}]);
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