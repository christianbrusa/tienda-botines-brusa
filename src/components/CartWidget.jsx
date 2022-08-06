import React, {useContext} from "react";
import { Context } from "../context/CartContext";
import "../css/CartWidget.css";

export default function CartWidget() {

    let {cart} = useContext(Context);
    console.log("El contenido del carrito es: ", cart);

    return (
        //Fragments
        <>
            <div className="shopping">
                <img
                    src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648596337/cart-removebg-preview_fqenhf.png"
                    width="60"
                    height="60"
                    className="d-inline-block"
                    alt=""
                />
                <p id="number">{cart.length}</p>
            </div>
        </>
    )
} 
