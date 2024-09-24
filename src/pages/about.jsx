import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext";

function AboutUs(){
  const { theme, setTheme } = useContext(ThemeContext);
  
    return(
        <div className={`${theme == "light" ? "bg-white text-black " : "bg-black text-white"}`}>
            <section className="text-gray-600 body-font">
           
  <div className ="container px-5 py-24 mx-auto" >
    
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <h1 className="sm:text-3xl text-2xl  title-font mb-4 text-red-600 font-semibold">
    About <span className="text-red-600 font-semibold">Us</span>
      </h1>
    
      
      <p className="leading-relaxed text-lg">
  Taste and Health Restaurant, situated in Malir's Gohar Green City, offers a unique dining experience focused on both flavor and wellness. Whether you're seeking a nutritious meal or just a delightful dining experience, our restaurant provides a warm and welcoming atmosphere. We specialize in healthy dishes crafted with fresh ingredients to cater to your dietary needs. Visit us to enjoy a variety of wholesome meals and discover a menu that balances taste and health. For more details, visit our shop at shop number 25 or contact us for additional information.
</p>


      <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
      <span className="text-red-500">Taste</span> & Health
      </h2>
      <p className="text-gray-500">Gohar Green City Shop 25</p>
    </div>
  </div>
</section>
        </div>
    )
}
export default AboutUs