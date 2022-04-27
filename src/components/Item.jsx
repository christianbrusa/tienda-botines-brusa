import React from "react";
import { Button, Card } from 'react-bootstrap';
import Products from "./Products";
import { Link } from "react-router-dom";
import "../css/Item.css";

export default function Item({ id, title, description, price, pictureUrl }) {

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
                    </Card.Body>
                </Card>
                </Link>
            </div>
        </>
    )
} 