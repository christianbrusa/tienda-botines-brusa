import React from "react";
import "../css/ItemNotFound.css";

export default function ItemNotFound() {
    return (
        //Fragments
        <>
            <div id="error">
                <div class="errorText">
                    <h1>Error 404</h1>
                    <h4>Página no encontrada.</h4>
                </div>
            </div>
        </>
    )
}
