import { Link } from "react-router-dom"


function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5t3QyuqAhSZC-k6cCiPnCoacDVz-48Jq9085lRfJtfZUA-f-CAxBmlPwLiDXa2Ug1cw&usqp=CAU"
              alt="Logo"
              className="w-10 h-10 bg-indigo-500 rounded-full"
            />

            <span className="ml-3 text-xl"><span className="text-red-500">Taste</span> & Health</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            <Link to={"aboutUs"} className="mr-5 text-black ">About Us</Link>

            <Link to={"ContactUs"} className="mr-5 text-black ">Contact us</Link>
            <Link to={"Login"} className="mr-5 text-black ">LogIn</Link>


          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >
            <Link to={"Home"}>Home</Link>
          </button>
        </div>
      </header>

    </div>
  )
}

export default Header