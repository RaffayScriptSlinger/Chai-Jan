import Header from "./Header";
import React from "react";
import Footer from "./footer";



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

