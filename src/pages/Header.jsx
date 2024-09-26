import { Link } from "react-router-dom"
import { HomeOutlined, SunOutlined } from "@ant-design/icons"; 
import { LoginOutlined } from "@ant-design/icons";
import { MoonOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";






function Header() {
  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <div>
      <header className={`${theme == "light" ? "bg-white text-black py-2 " : "bg-red-500 text-white py-2"}`}>
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center abc">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5t3QyuqAhSZC-k6cCiPnCoacDVz-48Jq9085lRfJtfZUA-f-CAxBmlPwLiDXa2Ug1cw&usqp=CAU"
              alt="Logo"
              className="w-10 h-10 bg-indigo-500 rounded-full"
            />

            <span className="ml-3 text-xl"><span className={`${theme == "light" ? "text-red-700" : "text-white"}`}>Taste</span> & Health</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">


            
           
            {theme === "light" ? (
        <span className="mr-5  ">
          <MoonOutlined
            onClick={() => setTheme("dark")} 
            fontSize={"1.8rem"}
            className="text-2xl  hover:text-orange-600 cursor-pointer transition-all duration-150 ease-linear"
          />
        </span>
      ) : (
        <span className="mr-5 ">
          <SunOutlined
            onClick={() => setTheme("light")} 
            fontSize={"1.8rem"}
            className="text-2xl hover:text-orange-600 cursor-pointer transition-all duration-150 ease-linear "
          />
        </span>
      )}
           <Link  className="mr-5 text-2xl"><ShoppingCartOutlined/></Link>
           
           
           <Link to="/logout" className="text-2xl mr-5"><LoginOutlined/></Link>


          </nav>
          <button  >
            <Link to={"/"} className="text-2xl"><HomeOutlined /></Link>
          </button>
        </div>
      </header>

    </div>
  )
}

export default Header