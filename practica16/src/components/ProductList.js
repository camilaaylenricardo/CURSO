import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  // Lista de productos estática
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;