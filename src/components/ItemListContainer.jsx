import React, { Component, useEffect, useState } from "react";
import Promise from '../utils/Promesa';
import ItemList from "./ItemList";
import Footer from './Footer';
import Loading from './Loading';
import "../css/ItemListContainer.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {

    const [Items, setItems] = useState([]);

    const { id } = useParams();

    let filterProducts = [];

    const db = getFirestore();
    const collectionRef = collection(db, "products");

    useEffect(() => {

        getDocs(collectionRef).then((res) => {
            let collection = res.docs.map((item) => ({id: item.id, ...item.data()}));
            if (id) {
                filterProducts = collection.filter(item => item.category == id);
                console.log(filterProducts);
                Promise(2000, filterProducts)
                    .then(result => setItems(result))
                    .catch(error => console.log("error"));
            }
            else {
                Promise(2000, collection)
                    .then(result => setItems(result))
                    .catch(error => console.log("error"));
            }
        })

    }, [id])

    return (
        //Fragments
        <>
            <div className="ResultProducts">
                <ItemList Products={Items} setProducts={setItems}/>
            </div>
            {
            Items.length > 0
            ? ""
            : <Loading/>
            }
        </>
    )
} 