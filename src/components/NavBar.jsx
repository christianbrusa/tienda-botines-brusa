import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import SearchBar from "./SearchBar";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, FormControl, Carousel } from 'react-bootstrap';
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
                            <SearchBar />
                            <CartWidget />
                            <img src="https://res.cloudinary.com/dycoseuyv/image/upload/v1662420558/login_nwihpy.png" alt=""
                                width="35"
                                height="35"
                                id="logo-login"
                            />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Carousel interval={2000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dycoseuyv/image/upload/v1669674677/kross-test-1_cz40qq.jpg"
                            alt="First slide"
                            height="350"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dycoseuyv/image/upload/v1669686519/nike-magista-bw-test-1_epzcj3.jpg"
                            alt="Second slide"
                            height="350"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://res.cloudinary.com/dycoseuyv/image/upload/v1669687490/dybala-black-test-1_qqqsio.jpg"
                            alt="Second slide"
                            height="350"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
