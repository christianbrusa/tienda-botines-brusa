import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../css/EmptyCart.css";

export default function EmptyCart() {

    return (
        //Fragments
        <>
            <div className="empty-list">
                <h3 id="empty-list-text">Su carrito está vacío</h3>
                <br />
                <Link to="/">
                <Button id="back-to-home">Seguir comprando...</Button>
                </Link>
            </div>
        </>
    )
} 