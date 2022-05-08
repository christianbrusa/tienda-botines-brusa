import React from "react";
import { DropdownButton, ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import "../css/SortItems.css";

export default function SortItems({menorPrecio, mayorPrecio}) {

    return (
        //Fragments
        <>
            <DropdownButton as={ButtonGroup} title="Ordenar por" id="bg-nested-dropdown" variant="outline-secondary">
                <Dropdown.Item id= "DropdownItem" onClick={mayorPrecio}>Mayor precio</Dropdown.Item>
                <Dropdown.Item id= "DropdownItem" onClick={menorPrecio}>Menor precio</Dropdown.Item>
            </DropdownButton>
        </>
    )
} 