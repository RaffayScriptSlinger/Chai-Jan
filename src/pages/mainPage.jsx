
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from './about.jsx';
import ContactUs from './ContactUs.jsx';
import Home from './Home.jsx';
import Header from './Header.jsx';
import ProductDetail from './productDetails/productsDetails.jsx';
import Footer from './footer.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Card from './card.jsx';





function MainPageContent(){
  


    return(
      
        <div  >
        <BrowserRouter >
       
        <Header/>
        
        <Routes>
              <Route path='/' element={<Home/>} />
            </Routes>
            <Routes>
              <Route path='/Login' element={<Login/>} />
            
            </Routes>
           
            <Routes>
              <Route path='/aboutUs' element={<AboutUs/>} />
            </Routes>
            <Routes>
              <Route path='/ContactUs' element={<ContactUs/>} />
            
            </Routes>
          
            <Routes>
              <Route path='/SignUp' element={<SignUp/>} />
            
            </Routes>
            <Routes>
              <Route path='/Home' element={<Home/>} />
            
            </Routes>
            <Routes>
            <Route path="/product/:productId" element={<ProductDetail />} />
            
            </Routes>
            <Routes>
            <Route path="/card" element={<Card />} />
            
            </Routes>

            
            < Footer />
          </BrowserRouter>

          </div>
    )
}
export default MainPageContent