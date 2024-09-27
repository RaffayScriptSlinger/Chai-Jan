import { Link } from "react-router-dom";
import { HomeOutlined, SunOutlined, MoonOutlined, ShoppingCartOutlined, LoginOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/AddToCartContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { cartItems } = useContext(CartContext);


  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <header className={`${theme === "light" ? "bg-white text-black py-2 " : "bg-red-500 text-white py-2"}`}>
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5t3QyuqAhSZC-k6cCiPnCoacDVz-48Jq9085lRfJtfZUA-f-CAxBmlPwLiDXa2Ug1cw&usqp=CAU"
              alt="Logo"
              className="w-10 h-10 bg-indigo-500 rounded-full"
            />
            <span className="ml-3 text-xl">
              <span className={`${theme === "light" ? "text-red-700" : "text-white"}`}>Taste</span> & Health
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

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
          </nav>
          <button>
            <Link to={"/"} className="text-2xl">
              <HomeOutlined />
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
