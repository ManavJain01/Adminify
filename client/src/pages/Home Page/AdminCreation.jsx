// Importing React Icons
import { CiUser } from "react-icons/ci";

// Importing React Packages
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing Hooks
import { useUser } from "../../hooks/useUser";

// Importing Local Files
import "../Login-Signup/Styles/Styles.css";

export default function AdminCreation() {
  // Custom Hooks
  const { signup } = useUser();

  // useNavigate
  const navigate = useNavigate();

  // useLocation
  const location = useLocation();
  const companyDetails = location.state || {};
  const logo = companyDetails.logo;

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
  }, []);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Validation
    const { userName, email, password, confirmPass } = data;
    if (!userName || !email || !password || !confirmPass) {
      setError("All fields are required.");
      return;
    }

    // Check if passwords match
    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    data.company = companyDetails.company || "";
    data.owner = companyDetails.owner || "";
    data.logo = companyDetails.logo || null;

    const user = await signup(data);

    if (user === "already exists") {
      setError("User already exist!!!");
      return;
    }

    if (user) {
      console.log("User: ", user);
      navigate("/admin");
    } else {
      setError("Error While SigningUp");
    }
  };

  return (
    <div className="text-lg text-white bg-[#222] flex justify-center items-center w-lvw h-lvh p-5">
      <div
        id="card-signup"
        className="relative bg-[#2d2d2d] w-[30rem] min-h-[30rem] px-8 py-5 rounded-lg shadow-lg
          before:absolute before:top-[--y] before:left-[--x] before:content-[''] before:opacity-0 hover:before:opacity-100 before:rounded-full
          overflow-hidden"
      >
        <div className="z-20 relative text-black flex flex-col gap-8 rounded-lg">
          {/* Company Details */}
          <div className="flex flex-col items-center gap-5">
            <div>
              {logo ? (
                <img src={URL.createObjectURL(logo)} className="brand-logo" />
              ) : (
                <CiUser className="size-16 text-white" />
              )}
            </div>

            <div className="text-white flex justify-between gap-5 flex-wrap w-full">
              <span>{companyDetails.company || "Company Name"}</span>
              <span>{companyDetails.owner || "Owner Name"}</span>
            </div>
          </div>
          <div className="create-admin-header">
            <span>Admin Creation Window</span>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="relative flex flex-col gap-8"
          >
            <section className="relative">
              <input
                type="text"
                name="userName"
                id="userName"
                required
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
            <div className="flex gap-5 justify-between flex-wrap">
              <Link
                to="/"
                state={companyDetails}
                className="text-white bg-blue-600 w-fit px-5 py-2 rounded-lg"
              >
                Go Back
              </Link>

              <button className="text-white bg-green-600 w-fit px-5 py-2 rounded-lg">
                Create Admin
              </button>
            </div>
          </form>

          {/* Login */}
          {/* <section className="relative flex flex-col gap-5">
            <hr className="opacity-50" />
            <span className="absolute -top-4 left-[140px] text-white backdrop-blur-md px-2">
              Already A User?
            </span>
            <Link
              to="/login"
              state={companyDetails}
              className="font-semibold text-xl text-center bg-white w-full px-5 py-2 rounded-lg"
            >
              Login to Existing Account
            </Link>
          </section> */}
        </div>
      </div>
    </div>
  );
}
