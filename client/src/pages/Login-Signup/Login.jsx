// Importing React Icons
import { IoReturnUpBackSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

// Importing React Packages
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing Clerk Packages
import { useClerk } from "@clerk/clerk-react";

// Importing Hooks
import { useUser } from "../../hooks/useUser";

// Importing Local Files
import "./Styles/Styles.css";
import ForgetPassword from "./components/ForgetPassword";

export default function Login() {
  // Clerk
  const { openSignIn } = useClerk();
  
  // Custom Hooks
  const { login } = useUser();

  // useNavigation
  const navigate = useNavigate();

  // useState
  const [error, setError] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // useEffect
  useEffect(() => {
    let cards = document.getElementById("card-login");
    cards.onmousemove = function (e) {
      let x = e.pageX - cards.offsetLeft;
      let y = e.pageY - cards.offsetTop;

      cards.style.setProperty("--x", x + "px");
      cards.style.setProperty("--y", y + "px");
    };

    const handleRefresh = async () => {
      if (localStorage.getItem("authToken")) navigate("/admin");
    };

    handleRefresh();
  }, []);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Validation
    const { userName, password } = data;

    if (!userName || !password) {
      alert("All fields are required.");
      return;
    }

    const user = await login(data);

    if (user === "success") {
      navigate("/admin");
    } else if (typeof user === "string") {
      setError(user);
      return;
    }
  };

  const handleSignIn = async () => {
    try {
      // Open Google Sign-In popup
      await openSignIn({ strategy: 'oauth_google' });

    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  }

  return (
    <div className="relative text-lg text-white bg-[#222] flex justify-center items-center w-lvw min-h-lvh p-5">
      <Link to="/" className="absolute top-5 left-5 hover:text-blue-600 flex items-center gap-3">
        <IoReturnUpBackSharp className="size-8" />
        Go Back to the Home Page
      </Link>

      <div
        id="card-login"
        className="relative bg-[#2d2d2d] flex flex-col gap-5 w-[30rem] min-h-[30rem] px-8 py-5 rounded-lg shadow-lg
          before:absolute before:top-[--y] before:left-[--x] before:content-[''] before:opacity-0 hover:before:opacity-100 before:rounded-full
          overflow-hidden"
      >
        <p className="text-center text-4xl text-white">{import.meta.env.VITE_REACT_APP_WebsiteName || "Enter Website Name"}</p>
        
        {forgetPassword ? (
          <ForgetPassword setForgetPassword={setForgetPassword} />
        ) : (
          <div className="z-20 relative text-black flex flex-col gap-8 rounded-lg">
            <button onClick={handleSignIn} className="font-semibold text-sm text-black bg-white flex items-center justify-center gap-5 py-2 rounded-lg">
              <FcGoogle className="size-5" />
              <span>Sign up with Google</span>
            </button>

            <section className="relative">
              <hr className="opacity-50" />
              <span className="absolute -top-4 left-48 text-white backdrop-blur-md px-2">or</span>
            </section>
            
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-8">
                <section className="relative">
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="or Email ID"
                    required
                    className="peer w-full px-5 py-2 rounded-full outline-none placeholder:relative placeholder:left-24 focus:placeholder:left-0 placeholder:text-black placeholder:duration-1000"
                  />
                  <label
                    htmlFor="userName"
                    className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full duration-700 cursor-pointer"
                  >
                    User Name
                  </label>
                </section>

                <section className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    required
                    className="peer w-full px-5 py-2 rounded-full outline-none"
                  />
                  <label
                    htmlFor="password"
                    className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full duration-700 cursor-pointer"
                  >
                    Password
                  </label>
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-4 right-4 cursor-pointer"
                  >
                    {showPassword ? <FaRegEye /> : <FaEyeSlash />}
                  </div>
                </section>
              </div>

              <div className="text-sm text-red-500 flex gap-5 items-center justify-between">
                {/* Show Error */}
                {error && <span>{error}</span>}

                {/* Forget Password */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setForgetPassword(true);
                  }}
                  className="ml-auto"
                >
                  Forget Password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                className="text-white bg-green-600 px-5 py-2 rounded-lg"
              >
                Login
              </button>
            </form>

            {/* Signup */}
            <section className="relative flex flex-col gap-5">
              <hr className="opacity-50" />
              <span className="absolute -top-4 left-44 text-white backdrop-blur-md px-2">
                New User?
              </span>
              <Link
                to="/signup"
                className="font-semibold text-xl text-center bg-white w-full px-5 py-2 rounded-lg"
              >
                Create A New Account
              </Link>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
