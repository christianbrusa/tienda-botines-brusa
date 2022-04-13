import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <ItemListContainer />
      <NavBar />
      <ItemDetailContainer/>

      <Routes>
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;


