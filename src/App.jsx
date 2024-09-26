import React from 'react';
import './App.css';
import MainPageContent from './pages/mainPage.jsx';
import ThemeContextProvider from './contexts/ThemeContext.jsx';
import CartContextProvider from './contexts/AddToCartContext.jsx'; 
import { Outlet } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <ThemeContextProvider>
        <CartContextProvider> 
          <Outlet/>
          <MainPageContent />
        </CartContextProvider>
      </ThemeContextProvider>
      </Router>
    </div>
  );
}

export default App;




 