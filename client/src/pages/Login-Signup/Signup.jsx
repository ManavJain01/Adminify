// Importing React Icons
import { IoReturnUpBackSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

// Importing React Packages
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing Clerk Packages
import { useSignIn } from '@clerk/clerk-react';

// Importing Hooks
import { useUser } from "../../hooks/useUser";

// Importing Local Files
import "./Styles/Styles.css";

export default function Signup() {
  // Custom Hooks
  const { signup } = useUser();

  // useNavigate
  const navigate = useNavigate();

  // useState
  const [error, setError] = useState("");

  // useEffect
  useEffect(() => {
    let cards = document.getElementById("card-signup");
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
  const handleUsernameChange = async (e) => {
    setError("");
    const value = e.target.value;
    const lastIdx = value[value.length-1];

    if(lastIdx === " ") setError("No Spaces Allowed in UserName");
    if(value.includes(" ")) setError("No Spaces Allowed in UserName");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    setError("");
    
    // Validation
    const { firstName, lastName, userName, email, password, confirmPass } = data;
    
    if (!firstName || !lastName || !userName || !email || !password || !confirmPass) {
      setError("All fields are required.");
      return;
    }

    if(userName.includes(" ")){
      setError("No Spaces Allowed in userName");
      return;
    }

    
    // Check if passwords match
    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }
    
    const fullName = firstName + ' ' + lastName;

    delete data.confirmPass;
    delete data.firstName;
    delete data.lastName;
    data.fullName = fullName;

    
    const user = await signup(data);

    if (user === "success") {
      navigate("/admin");
    } else if (typeof user === "string") {
      setError(user);
      return;
    }

    if (user) {
      navigate("/admin");
    } else {
      setError("Error While SigningUp");
      return;
    }
  };

  return (
    <div className="relative text-lg text-white bg-[#222] flex justify-center items-center w-lvw min-h-lvh p-5">
      <Link to="/" className="absolute top-5 left-5 hover:text-blue-600 flex items-center gap-3">
        <IoReturnUpBackSharp className="size-8" />
        Go Back to the Home Page
      </Link>

      <div
        id="card-signup"
        className="relative bg-[#2d2d2d] flex flex-col gap-5 w-[30rem] min-h-[30rem] px-8 py-5 rounded-lg shadow-lg
          before:absolute before:top-[--y] before:left-[--x] before:content-[''] before:opacity-0 hover:before:opacity-100 before:rounded-full
          overflow-hidden"
      >
        <p className="text-center text-4xl text-white">{import.meta.env.VITE_REACT_APP_WebsiteName || "Enter Website Name"}</p>

        <div className="z-20 relative text-black flex flex-col gap-8 rounded-lg">
          <Link to="https://cute-gorilla-43.accounts.dev/sign-up" className="font-semibold text-sm text-black bg-white flex items-center justify-center gap-5 py-2 rounded-lg">
            <FcGoogle className="size-5" />
            <span>Sign up with Google</span>
          </Link>

          <section className="relative">
            <hr className="opacity-50" />
            <span className="absolute -top-4 left-48 text-white backdrop-blur-md px-2">or</span>
          </section>

          <form
            onSubmit={(e) => handleSubmit(e)}
            className="relative flex flex-col gap-8"
          >
            <section className="relative">
              <label htmlFor="signupAs" className="absolute top-[7px] left-5 backdrop-blur-sm rounded-full">Signup as</label>
              <select name="signupAs" id="signupAs" className="w-full px-[98px] py-2 rounded-full outline-none cursor-pointer">
                <option value="user" className="rounded-full">User</option>
                <option value="admin" className="rounded-full">Admin</option>
              </select>
            </section>

            <div className="flex gap-5">
              <section className="relative">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  className="peer w-full px-5 py-2 rounded-full outline-none"
                />
                <label
                  htmlFor="firstName"
                  className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full duration-700 cursor-pointer"
                >
                  First Name
                </label>
              </section>

              <section className="relative">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  className="peer w-full px-5 py-2 rounded-full outline-none"
                  />
                <label
                  htmlFor="lastName"
                  className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full duration-700 cursor-pointer"
                  >
                  Last Name
                </label>
              </section>
            </div>

            <section className="relative">
              <input
                type="text"
                name="userName"
                id="userName"
                required
                onChange={(e) => handleUsernameChange(e)}
                className="peer w-full px-5 py-2 rounded-full outline-none"
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
                type="email"
                name="email"
                id="email"
                required
                className="peer w-full px-5 py-2 rounded-full outline-none"
              />
              <label
                htmlFor="email"
                className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full duration-700 cursor-pointer"
              >
                Email ID
              </label>
            </section>

            <section className="relative">
              <input
                type="password"
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
            </section>

            <section className="relative">
              <input
                type="password"
                name="confirmPass"
                id="confirmPass"
                required
                className="peer w-full px-5 py-2 rounded-full outline-none"
              />
              <label
                htmlFor="confirmPass"
                className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full duration-700 cursor-pointer"
              >
                Confirm Password
              </label>
            </section>

            {/* Show Error */}
            {error && (
              <span className="absolute bottom-12 left-32 text-red-600">
                {error}
              </span>
            )}

            {/* Signup */}
            <button className="text-white bg-green-600 px-5 py-2 rounded-lg">
              Signup
            </button>
          </form>

          {/* Login */}
          <section className="relative flex flex-col gap-5">
            <hr className="opacity-50" />
            <span className="absolute -top-4 left-[140px] text-white backdrop-blur-md px-2">
              Already A User?
            </span>
            <Link
              to="/login"
              className="font-semibold text-xl text-center bg-white w-full px-5 py-2 rounded-lg"
            >
              Login to Existing Account
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
