// Importing React Icons
import { CiUser } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

// Importing React Packages
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing Hooks
import { useUser } from "../../hooks/useUser";
import { useRefresh } from "../../hooks/useRefresh";

// Importing Local Files
import "./Styles/Styles.css";
import ForgetPassword from "./components/ForgetPassword";

export default function Login() {
  // Custom Hooks
  const { login } = useUser();
  const { getCompanyDetails } = useRefresh();

  // useNavigation
  const navigate = useNavigate();

  // useState
  const [companyDetails, setCompanyDetails] = useState({});
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
      const response = await getCompanyDetails();

      if (!response?.company && !response?.owner && !response?.logo) {
        navigate("/companyDetails");
      }

      setCompanyDetails({
        company: response?.company || "",
        owner: response?.owner || "",
        logo: response?.logo || "",
      });

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

  return (
    <div className="text-lg text-white bg-[#222] flex justify-center items-center w-lvw min-h-lvh p-5">
      <div
        id="card-login"
        className="relative bg-[#2d2d2d] w-[30rem] min-h-[30rem] px-8 py-5 rounded-lg shadow-lg
          before:absolute before:top-[--y] before:left-[--x] before:content-[''] before:opacity-0 hover:before:opacity-100 before:rounded-full
          overflow-hidden"
      >
        {forgetPassword ? (
          <ForgetPassword setForgetPassword={setForgetPassword} />
        ) : (
          <div className="z-20 relative text-black flex flex-col gap-8 rounded-lg">
            {/* Company Details */}
            <div className="flex flex-col items-center gap-5">
              <div>
                {companyDetails.logo ? (
                  <img src={companyDetails.logo} alt="logo" className="w-32 h-32 rounded-full" />
                ) : (
                  <CiUser className="size-16 text-white" />
                )}
              </div>

              <span className="text-3xl tracking-widest font-semibold text-white">{companyDetails.company || "Company Name"}</span>
            </div>

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
                state={companyDetails}
                className="font-semibold text-xl text-center bg-white w-full px-5 py-2 rounded-lg"
              >
                Create A New Account
              </Link>
            </section>

            <span className="text-center text-2xl text-white opacity-50">Company Owner - {companyDetails.owner || "Owner Name"}</span>
          </div>
        )}
      </div>
    </div>
  );
}
