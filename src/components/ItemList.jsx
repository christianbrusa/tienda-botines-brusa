import React from "react";
import Item from "./Item";
/*import "../css/";*/

export default function ItemList({ Products }) {
    return (
        //Fragments
        Products.map(prod => (
            <Item
                key={prod.id}
                title={prod.title}
                price={prod.price}
                pictureUrl={prod.pictureUrl}
            />
        ))
    )
} 