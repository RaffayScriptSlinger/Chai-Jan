// import React, { useState } from 'react'
// import{BrowserRouter,Route,Routes} from "react-router-dom";




// import './App.css'

// function App() {
 
  

//   return(
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element = {<h2>Hellow Welcome to Learning React</h2>}>

//       </Route>

//     </Routes>

//     </BrowserRouter>
//   );
// }

// export default App


import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AboutUs from './pages/about.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'
import Header from './pages/Header.jsx';
import Home from './pages/Home.jsx';


function App() {
  return (
    <BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      
      </Routes>
      <Routes>
        <Route path='/aboutUs' element={<AboutUs/>} />
      
      </Routes>

      <Routes>
        <Route path='/ContactUs' element={<ContactUs/>} />
      
      </Routes>
 
    
    </BrowserRouter>
  );
}

export default App;
