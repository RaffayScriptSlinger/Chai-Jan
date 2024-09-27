import React from 'react';
import './App.css';
import MainPageContent from './pages/mainPage.jsx';
import ThemeContextProvider from './contexts/ThemeContext.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contexts/AddToCartContext.jsx';

function App() {
  return (
    <div>
      <Router>
        <ThemeContextProvider>
          <CartProvider>
            <MainPageContent />
          </CartProvider>
        </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;
