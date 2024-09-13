import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../components/Header';
import ProductList from '../components/ProductsList';
import './Home.css'; // Archivo CSS de Home

const Home = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : 'light'}`}>
      <Header />
      <button onClick={toggleTheme} className="theme-toggle-button">
        Cambiar a {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
      <ProductList />
    </div>
  );
};

export default Home;