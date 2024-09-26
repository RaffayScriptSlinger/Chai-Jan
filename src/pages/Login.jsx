// Login Component
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../utils/firebase";
import loginimg from "../images/Login.png";

function Login() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to handle email/password login
  const loginUser = async () => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user data in localStorage
      localStorage.setItem("authToken", user.accessToken); // Save the token
      localStorage.setItem("userId", user.uid); // Save user ID

      Swal.fire("Congrats! You are logged in.");
      navigate("/"); // Redirect to home after successful login
      window.location.reload(); // Force component re-render to update login state
    } catch (err) {
      Swal.fire("Error", "Invalid email or password", "error");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle Google login
  const loginWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Store user data in localStorage
      localStorage.setItem("authToken", user.accessToken); // Save the token
      localStorage.setItem("userId", user.uid); // Save user ID

      Swal.fire("Congrats! You are logged in with Google.");
      navigate("/");
      window.location.reload(); // Force component re-render to update login state
    } catch (error) {
      Swal.fire("Error", error.message, "error");
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
            <img className="w-auto h-7 sm:h-8 lg:h-20" src={loginimg} alt="Logo" />
          </div>
          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          {/* Google Sign-In Button */}
          <button
            onClick={loginWithGoogle}
            disabled={loading}
            className={`flex items-center mx-auto justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            
            <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
          </button>

          {/* Divider */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
            <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
              or login with email
            </span>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <div className="flex justify-between">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">
                Password
              </label>
              <Link to="/forgot-password" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Sign In Button */}
          <div className="mt-6">
            <button
              onClick={loginUser}
              disabled={loading}
              className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 ${loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
            <Link to="/SignUp" className="text-sm text-black uppercase dark:text-gray-400 hover:underline">
              or sign up
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
