import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from 'react-bootstrap';
<link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'></link>


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar expand="lg" fixed="top" className="navBar">
                    <Container className="container" fluid>
                        <nav>
                            <img
                                src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648177612/fulbo5-removebg-preview_irz59j.png"
                                width="70"
                                height="50"
                                className="d-inline-block"
                                alt=""
                            />
                        </nav>
                        <Navbar.Brand href="#" className="brand" id="title">Botines AG</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className="d-flex2">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '300px' }} //Responsive
                            >
                                <Nav.Link href="#action1" className="links">Inicio</Nav.Link>
                                <NavDropdown title="Productos" className="links" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Nike</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Adidas</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Puma</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#action2" className="links">FAQ</Nav.Link>
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
                        height="400"
                        className="image1"
                        alt=""
                    />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum mollitia voluptas explicabo sit vero vel accusamus ipsa, tempore suscipit ad minima sapiente repellendus, quasi ratione necessitatibus aliquam dicta! Iste.</p>
            </div>
        );
    }
}
