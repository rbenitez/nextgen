// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Si tienes estilos globales
import App from './App'; // Importa el componente principal
import { BrowserRouter } from 'react-router-dom'; // Solo aquí se debería definir el BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
