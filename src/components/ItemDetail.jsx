import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "../css/ItemDetail.css";

export default function ItemDetail({producto}) {

    const [initialStock, setInitialStock] = useState(1);
    const [stock, setStock] = useState(5);

    function onAdd(num) {
        setInitialStock(num);
    }

    const [cartNumber, setcartNumber] = useState(0);

    function addToCart(initialStock) {
        setcartNumber(initialStock);
        console.log(initialStock);
    }

    return (
        //Fragments
        <>
            <main class="container">
                <div>
                    <ul>
                        <li id="imageGallery">
                        <img src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png" alt="" />
                        </li>
                        <li id="imageGallery">
                        <img src="https://res.cloudinary.com/dycoseuyv/image/upload/v1652230183/redobra2-removebg-preview_nf4mdt.png" alt="" />
                        </li>
                        <li id="imageGallery">
                        <img src="https://res.cloudinary.com/dycoseuyv/image/upload/v1652230183/redobra3-removebg-preview_cofiyz.png" alt="" />
                        </li>
                        <li id="imageGallery" style={{padding:"7px"}}>
                        <img src="https://res.cloudinary.com/dycoseuyv/image/upload/v1652239400/obrared4-removebg-preview_xe02oe.png" alt="" />
                        </li>
                    </ul>
                </div>
                <div class="left-column">
                    <img src={producto.pictureUrl} alt="" />
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
                        : <ItemCount initialStock={initialStock} stock={stock} onAdd={onAdd} addToCart={addToCart}/>
                    }  
                    </div>
                </div>
            </main>
        </>
    )
} 