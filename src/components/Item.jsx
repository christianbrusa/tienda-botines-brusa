import React, { Component, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import Products from "./Products";
import { Link } from "react-router-dom";
import "../css/Item.css";

export default function Item({ id, title, description, price, pictureUrl }) {

    const [initialStock, setInitialStock] = useState(1);
    const [stock, setStock] = useState(5);

    function onAdd(num) {
        setInitialStock(num);
    }

    return (
        //Fragments
        <>

            <div className="products">
                <Link id="clickOnProduct" to={`/item/${id}`}>
                <Card key={id} style={{}}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title id="title1">{title}</Card.Title>
                        <Card.Text id="price">{price}</Card.Text>
                        <div className="count">
                            <ItemCount initialStock={initialStock} stock={stock} onAdd={onAdd} />
                        </div>
                        <Button id="addToCart" variant="outline-primary" style={{ fontFamily: "Bahnschrift" }}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                </Link>
            </div>
        </>
    )
} 