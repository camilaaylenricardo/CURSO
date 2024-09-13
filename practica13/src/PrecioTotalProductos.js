import React, { useState } from 'react';
import './PrecioTotalProductos.css'; // Importa los estilos CSS

const PrecioTotalProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState('');

  const agregarProducto = () => {
    if (nombreProducto && precioProducto && cantidadProducto) {
      setProductos([
        ...productos,
        { nombre: nombreProducto, precio: parseFloat(precioProducto), cantidad: parseInt(cantidadProducto) }
      ]);
      setNombreProducto('');
      setPrecioProducto('');
      setCantidadProducto('');
    }
  };

  const calcularPrecioTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0).toFixed(2);
  };

  return (
    <div className="productos-container">
      <h1>Calculadora de Precio Total</h1>
      <input
        type="text"
        value={nombreProducto}
        onChange={(e) => setNombreProducto(e.target.value)}
        placeholder="Nombre del producto"
        className="input-producto"
      />
      <input
        type="number"
        value={precioProducto}
        onChange={(e) => setPrecioProducto(e.target.value)}
        placeholder="Precio del producto"
        className="input-producto"
      />
      <input
        type="number"
        value={cantidadProducto}
        onChange={(e) => setCantidadProducto(e.target.value)}
        placeholder="Cantidad"
        className="input-producto"
      />
      <button onClick={agregarProducto} className="btn-agregar">Agregar Producto</button>
      
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto, index) => (
          <li key={index} className="producto-item">
            {producto.nombre} - ${producto.precio} x {producto.cantidad}
          </li>
        ))}
      </ul>

      <h2 className="total">Precio Total: ${calcularPrecioTotal()}</h2>
    </div>
  );
};

export default PrecioTotalProductos;