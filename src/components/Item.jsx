import React, { Component, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import Products from "./Products";
import "../css/Item.css";

export default function Item({ id, title, description, price, pictureUrl }) {

    const [stockInicial, setStockInicial] = useState(1);
    const [stock, setStock] = useState(5);

    function onAdd(num) {
        setStockInicial(num);
    }

    return (
        //Fragments
        <>
            <div className="products">
                <Card key={id} style={{ width: '14rem' }}>
                    <Card.Img variant="top" src={pictureUrl} />
                    <Card.Body>
                        <Card.Title id="title1">{title}</Card.Title>
                        <Card.Text id="price">{price}</Card.Text>
                        <div className="count">
                            <ItemCount stockInicial={stockInicial} stock={stock} onAdd={onAdd} />
                        </div>
                        <Button id="addToCart" variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
} 