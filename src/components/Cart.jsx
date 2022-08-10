import React, { useContext } from "react";
import { Context } from "../context/CartContext";
import { Col, Row, Container, Button } from "react-bootstrap";
import "../css/Cart.css";

export default function Cart() {

    let { cart } = useContext(Context)
    //console.log(cart)
    return (
        //Fragments
        <>
            <div className='mx-5'>
                <Container fluid>
                    <Row id="first-row">
                        <Col md={5}><h6>Producto</h6></Col>
                        <Col><h6>Precio</h6></Col>
                        <Col><h6>Cantidad</h6></Col>
                        <Col><h6>Subtotal</h6></Col>
                    </Row>
                </Container>
                <Container fluid>
                    <Row id="product-row">
                        <Col md={5}>
                        <img id="img-cart" src={cart[0].picture}/>
                        <a>{cart[0].title}</a>
                        </Col>
                        <Col>{cart[0].price}</Col>
                        <Col>{cart[0].quantity}</Col>
                        <Col>{"$" + cart[0].price.split("$")[1] * Number(cart[0].quantity)}</Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}