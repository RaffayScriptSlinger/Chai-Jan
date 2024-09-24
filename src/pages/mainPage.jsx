import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './about.jsx';
import ContactUs from './ContactUs.jsx';
import Home from './Home.jsx';
import ProductDetail from './productDetails/productsDetails.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';
import Card from './card.jsx';
import Layout from '../components/layout.jsx';

function MainPageContent() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />

          {/* Private Routes */}
          <Route path='/' element={<Layout><Home /></Layout>} />
          <Route path='/aboutUs' element={<Layout><AboutUs /></Layout>} />
          <Route path='/ContactUs' element={<Layout><ContactUs /></Layout>} />
          <Route path='/product/:productId' element={<Layout><ProductDetail /></Layout>} />
          <Route path='/card' element={<Layout><Card /></Layout>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainPageContent;
