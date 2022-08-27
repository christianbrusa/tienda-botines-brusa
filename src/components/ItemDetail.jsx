import React, { Component, useState, useContext } from "react";
import { Context } from "../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import BackArrow from "./BackArrow";
import "../css/ItemDetail.css";

export default function ItemDetail({producto}) {

    const [initialStock, setInitialStock] = useState(1);
    const [stock, setStock] = useState(5);
    const [imgSelec, setImgSelec] = useState(0);

    let {addItem} = useContext(Context)

    function onAdd(num) {
        setInitialStock(num);
    }

    const [cartNumber, setcartNumber] = useState(0);

    function addToCart(initialStock) {
        setcartNumber(initialStock);
        //console.log(initialStock);
        addItem(producto.id, producto.title, initialStock, producto.price, producto.gallery[0]);
    }

    if (!producto.gallery) {
        return null; //componente cargando...
    }

    return (
        //Fragments
        <>
            <main class="container">
                <BackArrow/>
                <div>
                    <ul>
                        {producto.gallery.map((img, index) => (
                            <li>
                                <a id="imageGallery" style={{border: img === producto.gallery[imgSelec] ? "0.15rem solid rgb(74, 198, 74)" : ""}}>
                                    <img src={img} alt="" onClick={() => setImgSelec(producto.gallery.indexOf(img))} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div class="left-column">
                    <img src={producto.gallery[imgSelec]} alt="" style={{width:"400px", paddingTop:"35px"}}/>
                </div>
                <div id="right" class="right-column">
                    <h2>{producto.title}</h2>
                    <br></br>
                    <h4>${producto.price}</h4>
                    <br></br>
                    <p>{producto.description}</p>
                    <br></br>
                    <div className="count">
                        {
                            cartNumber > 0
                                ?
                                <div>
                                <Link to="/">
                                    <Button id="back-to-home">
                                        Ver mas productos
                                    </Button>
                                </Link>
                                <Link to="/cart">
                                    <Button id="FinishCart">
                                        Terminar mi compra
                                    </Button>
                                </Link>
                                </div>
                                : <ItemCount initialStock={initialStock} stock={stock} onAdd={onAdd} addToCart={addToCart} />
                        }
                    </div>
                </div>
            </main>
        </>
    )
}