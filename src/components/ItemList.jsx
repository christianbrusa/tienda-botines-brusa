import React, {useState} from "react";
import Item from "./Item";
import SortItems from "./SortItems";
/*import "../css/";*/

export default function ItemList({Products, setProducts}) {

    function mayorPrecio(){
        let filtroMayor = [...Products].sort((a, b) => (a.price > b.price ? -1 : 1));
        setProducts(filtroMayor);
        console.log(filtroMayor);
    }

    function menorPrecio(){
        let filtroMenor = [...Products].sort((a, b) => (a.price > b.price ? 1 : -1));
        setProducts(filtroMenor);
        console.log(filtroMenor);
    }

    return (
        //Fragments
        <>
        <SortItems menorPrecio={menorPrecio} mayorPrecio={mayorPrecio}/>
        <div className= "goncy" style={{display:"grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", marginTop:"-20px"}}>
        {Products.map(prod => (
            <Item
                key={prod.id}
                id={prod.id}
                title={prod.title}
                price={prod.price}
                description={prod.description}
                pictureUrl={prod.pictureUrl}
            />
        ))}
        </div>
        </>
    )
} 