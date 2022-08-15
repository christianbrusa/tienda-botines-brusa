import React, { useContext } from "react";
import { Context } from "../context/CartContext";
import { Col, Row, Container, Button } from "react-bootstrap";
import EmptyCart from "./emptyCart";
import "../css/Cart.css";

export default function Cart() {

    let { cart, removeItem } = useContext(Context)
    //console.log(cart)

    return (
        //Fragments
        <>
            {
                cart.length == 0 &&
                <EmptyCart />
                ||
                cart.length > 0 &&
                <div class="row g-0" className="product-list">
                    <div class="col-sm-6 col-md-8">
                        <Container fluid>
                            <Row id="first-row">
                                <Col md={5}><h6>Producto</h6></Col>
                                <Col><h6>Precio</h6></Col>
                                <Col><h6>Cantidad</h6></Col>
                                <Col><h6>Subtotal</h6></Col>
                                <Col></Col>
                            </Row>
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
                                        <Col>
                                            <button onClick={() => removeItem(cart[index].item)}>
                                                <img id="delete-icon" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1660421069/basura-icon_rtsfvm.png" />
                                            </button>
                                        </Col>
                                    </Row>
                                })
                            }
                        </Container>
                    </div>
                </div>
            }
        </>
    )
}