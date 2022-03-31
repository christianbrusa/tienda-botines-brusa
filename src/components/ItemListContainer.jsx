import React, { Component } from "react";
import { Button, Card } from 'react-bootstrap';
import "../css/ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
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
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/orangeobra-removebg-preview_xxwpef.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705321/lightobra-removebg-preview_gxszcs.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto4</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/orangeobra-removebg-preview_xxwpef.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto5</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="products">
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705321/lightobra-removebg-preview_gxszcs.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto6</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto7</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/orangeobra-removebg-preview_xxwpef.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto8</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705321/lightobra-removebg-preview_gxszcs.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto9</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>
                    <Card.Img variant="top" src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648705117/redobra-removebg-preview_sxlvqd.png" style={{ width: 170, height: 170 }} />
                    <Card.Body>
                        <Card.Title>Producto10</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-primary">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
} 