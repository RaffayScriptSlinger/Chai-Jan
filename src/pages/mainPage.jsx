import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import AboutUs from '../components/about.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Home from '../components/Home.jsx';
import ProductDetail from './productDetails/productsDetails.jsx';
import Login from './auth/Login.jsx';
import SignUp from './auth/SignUp.jsx';
import Card from './card.jsx';
import Layout from '../components/layout.jsx';
import LogOut from '../components/LogOut.jsx';
import FAQs from '../components/FAQs.jsx';
import Cart from '../components/cart.jsx';

function MainPageContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('authToken'));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); // Update login status based on token existence
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/logout' element={<LogOut />} />
     
      
      {/* Allow access to Home without login */}
      <Route path='/' element={<Layout><Home /></Layout>} />
      
      {/* Private Routes - Require login for these pages */}
      <Route
        path='/aboutUs'
        element={isLoggedIn ? <Layout><AboutUs /></Layout> : <Navigate to="/Login" />}
      />
      <Route
        path='/ContactUs'
        element={isLoggedIn ? <Layout><ContactUs /></Layout> : <Navigate to="/Login" />}
      />
      <Route
        path='/product/:productId'
        element={isLoggedIn ? <Layout><ProductDetail /></Layout> : <Navigate to="/Login" />}
      />
      <Route
        path='/card'
        element={isLoggedIn ? <Layout><Card /></Layout> : <Navigate to="/Login" />}
      />
      <Route path='/Cart' element={<Layout><Cart /></Layout> } />
      <Route path='/FAQs' element={ <Layout><FAQs /></Layout>} />
    </Routes>
  );
}

export default MainPageContent;
