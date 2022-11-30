import React, { useEffect, useState } from "react";
import Promise from '../utils/Promesa';
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
//import "../css/";

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const { id } = useParams();

    let selectProduct = {};

    const db = getFirestore();
    const collectionRef = collection(db, "products");

    useEffect(() => {
        window.scrollTo(0, 0);
        getDocs(collectionRef).then((res) => {
        let collection = res.docs.map((item) => ({id: item.id, ...item.data()}));
        selectProduct = collection.filter(item => item.id == id);
        console.log(selectProduct);
        setProducto(selectProduct[0]);
        })

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