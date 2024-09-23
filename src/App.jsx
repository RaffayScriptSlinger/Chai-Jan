
import React from 'react';
import './App.css';
import MainPageContent from './pages/mainPage.jsx';
import ThemeContextProvider from './contexts/ThemeContext.jsx';


function App() {
 
  return (
    <div >
      
      <ThemeContextProvider>
    <MainPageContent />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
