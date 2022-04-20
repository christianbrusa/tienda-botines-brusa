import React from "react";
import { Button } from "react-bootstrap";
import "../css/ItemDetail.css";

export default function ItemDetail({producto}) {
    return (
        //Fragments
        <>
            <main class="container">
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
                    <Button variant="outline-primary" style={{ fontFamily: "Bahnschrift" }}>Agregar al carrito</Button>
                </div>
            </main>
        </>
    )
} 