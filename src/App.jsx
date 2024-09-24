import React from 'react';
import './App.css';
import MainPageContent from './pages/mainPage.jsx';
import ThemeContextProvider from './contexts/ThemeContext.jsx';
import CartContextProvider from './contexts/AddToCartContext.jsx'; 
import { Outlet } from 'react-router';

function App() {
  return (
    <div>
      <ThemeContextProvider>
        <CartContextProvider> 
          <Outlet/>
          <MainPageContent />
        </CartContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;




 