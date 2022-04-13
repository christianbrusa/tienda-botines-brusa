import React from "react";
import "../css/ItemDetail.css";

export default function ItemDetail({producto}) {
    return (
        //Fragments
        <>
            <div className="ProductDetail">
            <img id= "pictureDetail" src={producto.pictureUrl} alt="" />
            </div>
            <h2>{producto.title}</h2>
            <h4>{producto.price}</h4>
            <p>{producto.description}</p>
        </>
    )
} 