import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Card from "./card";
import AboutUs from "./about";
import ContactUs from "./ContactUs";
import logo from "../images/pizza.jpg"
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";





function Home() {

  const { theme, setTheme } = useContext(ThemeContext);
  
  
  const navigate = useNavigate();
  return (
    <section className={`${theme == "light" ? "bg-white text-black " : "bg-black text-white"}`}   >
      <div className="container mx-auto flex px-1 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-4  text-gray-900 font-bold">
            <span className="text-red-500">Taste & </span>  <span className={`${theme == "light" ? "text-black" : "text-white"}`}> Health</span>
          </h1>
          <p className="mb-8 leading-relaxed">
          Taste and Health is all about serving delicious and nutritious meals. From juicy burgers and cheesy pizzas to wholesome salads and smoothies, we’ve got something for everyone. Our menu blends the best of

          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            
          <button
      className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
      onClick={() => navigate("/card")} 
    >
      Menu
    </button>
  


            <button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 ml-3 focus:outline-none hover:bg-red-600 rounded text-lg"
             onClick={() => navigate("/ContactUs")}>
              Contact us
            </button>
          </div>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg border h-96"
            alt="Logo Here!"
            src={logo}
          />
        </div>
        
      </div>
      <Card />
     
      <AboutUs />

      <ContactUs />
      
      
    </section>
   


  );
}

export default Home;
