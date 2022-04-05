import React, { Component, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import ItemCount from "./ItemCount";
import "../css/ItemListContainer.css";

export default function ItemListContainer({ greeting }) {

    const [stockInicial,setStockInicial] = useState(1);
    const [stock,setStock] = useState(5);

    function onAdd(numero){
        setStockInicial(numero);
    }

    return (
        //Fragments
        <>
            <div>
                <img
                    src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648259988/obrablue_2_gkgt6n.jpg"
                    width="100%"
                    height="250"
                    className="image1"
                    alt=""
                />
            </div>
            <p>{greeting}</p>
            <div className="products">
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <div className="count">
                        <ItemCount stockInicial= {stockInicial} stock= {stock} onAdd = {onAdd}/>
                        </div>
                        <Button id="addToCart" variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="products">
                
            </div>
        </>
    )
} 