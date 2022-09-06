import React, { useState } from "react";
import "../css/SearchBar.css";

export default function SearchBar() {

    const [text, setText] = useState("");

    function filterText(e){
        setText(e.target.value);
    }

    console.log(text);

    return (
        //Fragments
        <>
            <div class="search-bar">
                <input type="search" class="form-control" placeholder="Buscar" onChange={(e) => filterText(e)}/>
            </div>
        </>
    )
}