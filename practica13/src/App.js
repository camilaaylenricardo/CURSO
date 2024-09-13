import React from 'react';
import ContadorAutomatico from './ContadorAutomatico';
import CalculadoraCuadrados from './CalculadoraCuadrados';
import PrecioTotalProductos from './PrecioTotalProductos';
import './App.css'; // Importa los estilos generales de la aplicación

const App = () => {
  return (
    <div className="app-container">
      <h1>Ejercicios de React</h1>
      <div className="ejercicio">
        <ContadorAutomatico />
      </div>
      <div className="ejercicio">
        <CalculadoraCuadrados />
      </div>
      <div className="ejercicio">
        <PrecioTotalProductos />
      </div>
    </div>
  );
};

export default App;