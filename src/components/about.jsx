import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
function AboutUs() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`${theme == "light" ? "bg-white text-black " : "bg-black text-white"}`}>
      <>
        <section className=" body-font">
          <div className="container px-5 py-8 mx-auto">
            <div className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-600">
                Why Choose Us
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Enjoy a variety of mouth-watering dishes, from pizzas and burgers to
                healthy salads and smoothies. Satisfy your cravings without compromising
                on nutrition.
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-green-500 inline-flex" />
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zM12 12l4.242-4.242M12 12L7.758 7.758M12 12v4M12 12H8" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className="text-lg title-font font-medium mb-3">
                    Healthy Salads
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fresh, organic ingredients mixed to perfection, delivering both taste and nutrition in every bite.
                  </p>
                 
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zM10 10l4 4M10 14l4-4" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className=" text-lg title-font font-medium mb-3">
                    Gourmet Pizzas
                  </h2>
                  <p className="leading-relaxed text-base">
                    Hand-tossed pizzas with the finest ingredients, baked to golden perfection.
                  </p>
                  
                </div>
              </div>
              <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-5 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 2C4.134 2 1 5.134 1 9s3.134 7 7 7h8c3.866 0 7-3.134 7-7s-3.134-7-7-7H8zM1 9h20M12 22v-6M10 12v6M14 12v6" />
                  </svg>
                </div>
                <div className="flex-grow">
                  <h2 className=" text-lg title-font font-medium mb-3">
                    Juicy Burgers
                  </h2>
                  <p className="leading-relaxed text-base">
                    Savor the taste of freshly grilled burgers made from premium meats and fresh toppings.
                  </p>
                
                </div>
              </div>
            </div>
      
       <Link to="/card" className="text-red-600">  <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
                Order Now
              </button></Link>
            
             

          </div>
        </section>
      </>

    </div>
  )
}
export default AboutUs