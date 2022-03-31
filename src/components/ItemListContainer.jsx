import React from "react";

export default function ItemListContainer({greeting}) {
    return (
        //Fragments
        <>
            <div>
                <img
                    src="https://res.cloudinary.com/dycoseuyv/image/upload/v1648259988/obrablue_2_gkgt6n.jpg"
                    width="100%"
                    height="400"
                    className="image1"
                    alt=""
                />
            </div>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
            <p>{greeting}</p>
        </>
    )
} 