import React, { useState } from 'react';
import './CalculadoraCuadrados.css'; // Importa los estilos CSS

const CalculadoraCuadrados = () => {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularCuadrado = () => {
    const cuadrado = numero * numero;
    setResultado(cuadrado);
  };

  return (
    <div className="calculadora-container">
      <h1>Calculadora de Cuadrados</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        placeholder="Ingrese un número"
        className="input-numero"
      />
      <button onClick={calcularCuadrado} className="btn-calcular">Calcular Cuadrado</button>
      {resultado !== null && (
        <h2 className="resultado">El cuadrado es: {resultado}</h2>
      )}
    </div>
  );
};

export default CalculadoraCuadrados;