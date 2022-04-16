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
      <NavBar />

      <Routes>
      <Route exact path='/' element={<ItemListContainer />}/>
      <Route exact path='/categoria/:id' element={<ItemListContainer />}/>
      <Route exact path='/producto1' element={<ItemDetailContainer/>}/>
      </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;


