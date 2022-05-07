import React from "react";
import { DropdownButton, ButtonGroup, Dropdown, Button } from 'react-bootstrap';
import "../css/SortItems.css";

export default function SortItems() {

    return (
        //Fragments
        <>
            <DropdownButton as={ButtonGroup} title="Ordenar por" id="bg-nested-dropdown" variant="outline-secondary">
                <Dropdown.Item>Mayor precio</Dropdown.Item>
                <Dropdown.Item>Menor precio</Dropdown.Item>
            </DropdownButton>
        </>
    )
} 