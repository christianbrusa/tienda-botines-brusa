import React, { useState } from "react";
import "../css/ItemCount.css";

export default function ItemCount({stockInicial, stock, onAdd}) {

    function incrementar(){
        if(stockInicial < stock){
            onAdd(stockInicial + 1);
        }
    }

    function decrementar(){
        if(stockInicial > 0){
            onAdd(stockInicial - 1);
        }
    }

    return (
        //Fragments
        <>
            <div>
            {/*Aqui no pasar la función ejecutada. En caso que la función tenga que recibir 
            parametros, aqui hacerlo con función flecha*/}
            <button id= "add" onClick={incrementar}>+</button>
            <input id= "quantity" type="Cantidad" value={stockInicial} size="1"/>
            <button id= "remove" onClick={decrementar}>-</button>
            </div>
        </>
    )
} 
