// Importing React Icons
import { CiUser } from "react-icons/ci";
import { LuLoader2 } from "react-icons/lu";

// Importing React Packages
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing Hooks
import { useHook } from "../../hooks/useHook";
import { useRefresh } from "../../hooks/useRefresh";

// Importing Local Files
import "../Login-Signup/Styles/Styles.css";

export default function AdminCreation() {
  // Custom Hooks
  const { createCompany } = useHook();
  const { getCompanyDetails } = useRefresh();

  // useNavigate
  const navigate = useNavigate();

  // useState
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyDetails, setCompanyDetails] = useState({});

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
      const data = await getCompanyDetails();

      if (!data?.company && !data?.owner && !data?.logo) {
        navigate("/companyDetails");
      }

      setCompanyDetails({
        company: data?.company || "",
        owner: data?.owner || "",
        logo: data?.logo || "",
      });
    };

    handleRefresh();
  }, []);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData(e.target);
      // Validation
      const firstName = formData.get("firstName");
      const lastName = formData.get("lastName");
      const userName = formData.get("userName");
      const email = formData.get("email");
      const password = formData.get("password");
      const confirmPass = formData.get("confirmPass");
  
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
  
      formData.append("company", companyDetails.company || "");
      formData.append("owner", companyDetails.owner || "");
      if (companyDetails.logo) {
        formData.append("logo", companyDetails.logo); // Assuming logo is a File object
      }
      const fullName = firstName + ' ' + lastName;
      formData.append("fullName", fullName || "");
  
      // Remove the confirmPass field from FormData
      formData.delete("confirmPass");
  
      const user = await createCompany(formData);
      if (user === "already exists") {
        setError("User already exist!!!");
        return;
      }
  
      if (user) {
        navigate("/admin");
      } else {
        setError("Error While SigningUp");
      }
    } catch (error) {
      setError("Error Creating Company!!!");
    } finally {
      setLoading(false);
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
              {companyDetails.logo ? (
                <img src={URL.createObjectURL(companyDetails.logo)} className="brand-logo" />
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
            <div  className="flex gap-5">
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

            {loading
              ?<span className="text-white bg-green-600 px-5 py-2 rounded-lg"><LuLoader2 className="size-8 mx-auto animate-spin" /></span>
              :<div className="flex gap-5 justify-between flex-wrap">
                {/* Company Details Page */}
                <Link
                  to="/companyDetails"
                  state={companyDetails}
                  className="text-white bg-blue-600 w-fit px-5 py-2 rounded-lg"
                >
                  Go Back
                </Link>

                {/* Creating Company */}
                <button className="text-white bg-green-600 w-fit px-5 py-2 rounded-lg">
                  Create Company
                </button>
              </div>
            }
          </form>
        </div>
      </div>
    </div>
  );
}
