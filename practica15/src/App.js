import React from 'react';
import ThemeProvider from './contexts/ThemeContext';
import Home from './pages/Home';
import './App.css'; // Archivo CSS principal

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;