import React from "react";
import { Link } from "react-router-dom";

export default function BackArrow() {
    
    return (
        //Fragments
        <>
            <Link to="/">
                <img 
                    src="https://res.cloudinary.com/dycoseuyv/image/upload/v1653450586/flecha6-removebg-preview_fodlhi.png" 
                    alt=""
                    height="50"
                    style={{marginRigth:"20px", marginTop:"5px"}}
                />
            </Link>
        </>
    )
}