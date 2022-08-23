import React, { useContext } from "react";
import { Context } from "../context/CartContext";
import { Col, Row, Container, Button, Form } from "react-bootstrap";
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
                <div class="row g-0">
                    <div class="col-sm-6 col-md-8">
                        <Container fluid className="product-list">
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
                                        <Col>{"$" + Number(cart[index].price) * Number(cart[index].quantity)}</Col>
                                        <Col>
                                            <button id="delete-button" onClick={() => removeItem(cart[index].item)}>
                                                <img id="delete-icon" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1660421069/basura-icon_rtsfvm.png" />
                                            </button>
                                        </Col>
                                    </Row>
                                })
                            }
                        </Container>
                    </div>
                    <div class="col-6 col-md-4">
                        <Container className="container-checkout">
                            <Form id="form-checkout">
                                <Row>
                                    <label id="titulo-checkout">RESUMEN DE COMPRA</label>
                                </Row>
                                <div id="form-data">
                                    <Row>
                                        <Col>
                                            <label>Cupón de descuento</label>
                                        </Col>
                                        <Col>
                                            <Form.Control placeholder="Código" />
                                        </Col>
                                    </Row>
                                    <Row id="subtotal-row">
                                        <Col>
                                        <div>
                                            <label>Subtotal</label>
                                        </div>
                                        </Col>
                                        <Col>
                                            <label id="subtotal-checkout">$100.000</label>
                                        </Col>
                                    </Row>
                                    <Row id="total-row">
                                        <Col>
                                            <div>
                                                <label>Total</label>
                                            </div>
                                        </Col>
                                        <Col>
                                            <label id="total-checkout">$100.000</label>
                                        </Col>
                                    </Row>
                                </div>
                                <Row>
                                    <div id="boton-finalizar-compra">
                                        <Button variant="success" id="boton-finalizar-compra">Finalizar compra</Button>
                                    </div>
                                </Row>

                            </Form>
                        </Container>
                    </div>
                </div>
            }
        </>
    )
}