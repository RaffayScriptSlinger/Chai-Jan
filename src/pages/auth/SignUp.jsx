import Swal from "sweetalert2";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import signUpimg from "../../images/signUpimg.png";

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUpUser = async () => {
    if (!email || !password) {
      Swal.fire("Please enter both email and password!");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("authToken", user.accessToken); 
      localStorage.setItem("userId", user.uid); 

      Swal.fire("Account created successfully!");
      navigate("/"); 
      window.location.reload(); 
    } catch (err) {
      Swal.fire(err.message);
    } finally {
      setLoading(false);
    }
  };

  





  return (
    <div className="h-[85vh] w-full flex justify-center items-center">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div
          className="hidden bg-cover lg:block lg:w-1/2"
          style={{
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1673580742890-4af144293960?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        />
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8 lg:h-28" src={signUpimg} alt="Logo" />
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Register your account!
          </p>

          
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

        
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">
              Password
            </label>
            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          
          <div className="mt-6">
            <button
              onClick={handleSignUpUser}
              disabled={loading}
              className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>

       
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link
              to="/login"
              className="text-sm text-black uppercase dark:text-gray-400 hover:underline"
            >
              or Sign in
            </Link>
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
