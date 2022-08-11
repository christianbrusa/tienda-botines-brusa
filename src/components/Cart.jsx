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
                    {
                        cart.map(function (item, index) {
                            return <Row id="product-row">
                                <Col md={5}>
                                    <img id="img-cart" src={cart[index].picture}/>
                                    <a>{cart[index].title}</a>
                                </Col>
                                <Col>{cart[index].price}</Col>
                                <Col>{cart[index].quantity}</Col>
                                <Col>{"$" + cart[index].price.split("$")[1] * Number(cart[index].quantity)}</Col>
                            </Row>
                        })
                    }
                </Container>
            </div>
        </>
    )
}