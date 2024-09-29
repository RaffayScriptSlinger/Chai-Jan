import { Link } from "react-router-dom";
import { HomeOutlined, SunOutlined, MoonOutlined, ShoppingCartOutlined, LoginOutlined, MenuOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/AddToCartContext";
import { Drawer } from "antd";
import newLogo from '../images/newLogo.png';
import darkLogo from "../images/darkLogo.png";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);
  const [visible, setVisible] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <header className={`${theme === "light" ? "bg-white text-black py-2" : "bg-red-500 text-white py-2"}`}>
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src={theme === "light" ? newLogo : darkLogo}
              alt="Logo"
              className="w-11 h-11 bg-indigo-500 rounded-full bg-transparent mt-1"
            />
            <span className="ml-3 text-xl">
              <span className={`${theme === "light" ? "text-red-700" : "text-white"}`}>Taste</span> & Health
            </span>
          </a>

          {/* Only show the offcanvas button on small screens */}
          <button className="md:hidden" onClick={showDrawer}>
            <MenuOutlined className="text-2xl" />
          </button>

          {/* Only show these icons if the drawer is not visible on larger screens */}
          <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
            {theme === "light" ? (
              <span className="mr-5">
                <MoonOutlined
                  onClick={toggleTheme}
                  fontSize={"1.8rem"}
                  className="text-2xl hover:text-orange-600 cursor-pointer transition-all duration-150 ease-linear"
                />
              </span>
            ) : (
              <span className="mr-5">
                <SunOutlined
                  onClick={toggleTheme}
                  fontSize={"1.8rem"}
                  className="text-2xl hover:text-orange-600 cursor-pointer transition-all duration-150 ease-linear"
                />
              </span>
            )}

            <Link to="/Cart" className="mr-5 text-2xl relative">
              <ShoppingCartOutlined />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <Link to="/logout" className="text-2xl mr-5">
              <LoginOutlined />
            </Link>

            <button>
              <Link to="/" className="text-2xl">
                <HomeOutlined />
              </Link>
            </button>
          </nav>
        </div>
      </header>

      {/* Offcanvas Drawer */}
      <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
        <nav className="flex flex-col items-start">
          <Link to="/" onClick={onClose} className="py-2">Home</Link>
          <Link to="/Cart" onClick={onClose} className="py-2">Cart</Link>
          <Link to="/logout" onClick={onClose} className="py-2">Logout</Link>
          <button onClick={toggleTheme} className="py-2">
            {theme === "light" ? <MoonOutlined /> : <SunOutlined />}
            
          </button>
        </nav>
      </Drawer>
    </div>
  );
}

export default Header;
