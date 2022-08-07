import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import Item from './components/Item';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemNotFound from './components/ItemNotFound';
import CartContext from './context/CartContext';

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
        <NavBar />

        <Routes>
        <Route exact path='*' element={<ItemNotFound />}/>
        <Route exact path='/' element={<ItemListContainer />}/>
        <Route exact path='/category/:id' element={<ItemListContainer />}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
        <Route exact path='/cart' element={<Cart />}/>
        </Routes>
        
        <Footer/>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;


