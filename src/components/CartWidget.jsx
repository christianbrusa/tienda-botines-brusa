import React from "react";
import "../css/CartWidget.css";

export default function CartWidget() {
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
                <p id="number">0</p>
            </div>
        </>
    )
} 
