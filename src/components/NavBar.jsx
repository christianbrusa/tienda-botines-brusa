import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, FormControl } from 'react-bootstrap';
import { Link } from "react-router-dom";
<link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>



export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" fixed="top" className="navBar">
                    <Container className="container" fluid>
                        <nav>
                            <img
                                src="https://res.cloudinary.com/dycoseuyv/image/upload/v1653364655/logotest4-removebg-preview_pcygls.png"
                                width="110"
                                height="70"
                                className="d-inline-block"
                                alt="/"
                            />
                        </nav>
                        <Navbar.Brand href="/" className="brand" id="title">Botines AG</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="d-flex2">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '300px' }} //Responsive
                            >
                                <div className="routes">
                                <li><Link id="buttons" to={`/`}>Inicio</Link></li>
                                <li><Link id="buttons" to={`/category/nike`}>Nike</Link></li>
                                <li><Link id="buttons" to={`/category/adidas`}>Adidas</Link></li>
                                <li><Link id="buttons" to={`/category/puma`}>Puma</Link></li>
                                </div>
                            </Nav>
                            <CartWidget />
                            <Button variant="light" style={{ marginLeft: 12.5, fontFamily: "Bahnschrift" }}>Login</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <img
                        src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648259988/obrablue_2_gkgt6n.jpg"
                        width="100%"
                        height="190"
                        className="banner"
                        alt=""
                    />
                </div>
            </div>
        );
    }
}
