import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom'; // Change to HashRouter
import { CartContext } from './Stores/UseContext/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <CartContext>
        <App />
      </CartContext>
    </StrictMode>
  </HashRouter>
);