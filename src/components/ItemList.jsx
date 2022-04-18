import React from "react";
import Item from "./Item";
/*import "../css/";*/

export default function ItemList({ Products }) {
    return (
        //Fragments
        <div className= "goncy" style={{display:"grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))"}}>
        {Products.map(prod => (
            
            <Item
                id={prod.id}
                title={prod.title}
                price={prod.price}
                pictureUrl={prod.pictureUrl}
            />
        ))}
        </div>
    )
} 