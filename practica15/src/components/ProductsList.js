import React from 'react';
import './ProductsList.css'; // Archivo CSS de ProductList

const ProductList = () => {
  // Lista de productos estática por ahora
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 200 },
    { id: 3, name: 'Producto 3', price: 300 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h2>{product.name}</h2>
          <p>Precio: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;