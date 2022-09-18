import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/SearchBar.css";

export default function SearchBar() {

    const [text, setText] = useState("");
    const navigate = useNavigate();

    function filterText(e){
        setText(e.target.value);
    }

    useEffect(() => {
        if (text.length > 0) {
            navigate({
                pathname: 'catalog',
                search: `?search=${text}`
            });
        }
        document.addEventListener("keyup", function(e) {
            if (e.key === "Enter") {
                window.location.reload();
            }
        });
    }, [text])

    return (
        //Fragments
        <>
            <div className="search-bar">
                <input type="search" className="form-control" placeholder="Buscar" onChange={(e) => filterText(e)}/>
            </div>
        </>
    )
}