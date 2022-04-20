import React, { useEffect, useState } from "react";
import Promise from '../utils/Promesa';
import Products from './Products';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
//import "../css/";

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const { id } = useParams();

    let selectProduct = {};

    useEffect(() => {
        selectProduct = Products.filter(item => item.id == id)
        console.log(selectProduct)
        setProducto(selectProduct[0])

    }, [id])

    return (
        //Fragments
        <>
            <div>
            <ItemDetail producto={producto} />
            </div>
        </>
    )
} 