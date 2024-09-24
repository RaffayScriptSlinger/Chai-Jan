import Header from "../pages/Header";
import React from "react";
import Footer from "../pages/footer";



const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

