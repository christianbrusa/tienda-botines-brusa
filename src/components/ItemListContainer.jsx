import React, { Component, useEffect, useState } from "react";
import { Button, Card } from 'react-bootstrap';
import Promise from '../utils/Promesa';
import Products from './Products';
import ItemList from "./ItemList";
import "../css/ItemListContainer.css";

export default function ItemListContainer() {

    const [Items, setItems] = useState([]);

    useEffect(() => {
        Promise(700,Products)
        .then(result => setItems(result))
        .catch(error => console.log("error"));
    }, [Items])

    return (
        //Fragments
        <>
            <div>
                <img
                    src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648259988/obrablue_2_gkgt6n.jpg"
                    width="100%"
                    height="190"
                    className="image1"
                    alt=""
                />
            </div>
            <div className="ResultProducts">
                <ItemList Products={Items}/>
            </div>
        </>
    )
} 