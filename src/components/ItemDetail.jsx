import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

export default function ItemDetail({producto}) {

    const [initialStock, setInitialStock] = useState(1);
    const [stock, setStock] = useState(5);
    const [imgSelec, setImgSelec] = useState(0);

    function onAdd(num) {
        setInitialStock(num);
    }

    const [cartNumber, setcartNumber] = useState(0);

    function addToCart(initialStock) {
        setcartNumber(initialStock);
        console.log(initialStock);
    }

    if (!producto.gallery) {
        return null; //componente cargando...
    }

    return (
        //Fragments
        <>
            <main class="container">
                <div>
                    <ul>
                        {producto.gallery.map((img, index) => (
                            <li>
                                <a id="imageGallery">
                                    <img src={img} alt="" onClick={() => setImgSelec(producto.gallery.indexOf(img))} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="left-column">
                    <img src={producto.gallery[imgSelec]} alt="" />
                </div>
                <div id="right" class="right-column">
                    <h2>{producto.title}</h2>
                    <br></br>
                    <h4>{producto.price}</h4>
                    <br></br>
                    <p>{producto.description}</p>
                    <br></br>
                    <div className="count">
                        {
                            cartNumber > 0
                            ? <Link to="/cart">Terminar mi compra</Link>
                            : <ItemCount initialStock={initialStock} stock={stock} onAdd={onAdd} addToCart={addToCart} />
                        }
                    </div>
                </div>
            </main>
        </>
    )
}