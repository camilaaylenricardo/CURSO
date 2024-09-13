import React from 'react';
import CartProvider from './contexts/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Mi Tienda</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;