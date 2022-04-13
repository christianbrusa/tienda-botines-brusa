import React, { useEffect, useState } from "react";
import Promise2 from '../utils/Promesa2';
import ItemDetail from "./ItemDetail";
//import "../css/";

export default function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    useEffect(()=>{
        Promise2()
        .then((res)=>{
            setProducto(res);
            console.log(res);
        })
    }, [])

    return (
        //Fragments
        <>
            <ItemDetail producto={producto}/>
        </>
    )
} 