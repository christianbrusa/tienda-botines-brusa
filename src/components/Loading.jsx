import React from "react";
import { Spinner } from "react-bootstrap";
import "../css/Loading.css";

export default function Loading() {
    
    return (
        //Fragments
        <>
            <div id="Loading">
            <Spinner animation="border" id="spinner" />
            </div>
        </>
    )
}