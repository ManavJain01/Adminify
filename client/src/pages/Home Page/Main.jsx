// Importing React Icons
import { CiImport } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// Importing React Packages
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Main.css";

export default function Main() {
  // useState
  const [companyDetails, setCompanyDetails] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  //useNavigate
  const navigate = useNavigate();

  // useEffect
  useEffect(() => {
    let cards = document.getElementById("card");
    cards.onmousemove = function (e) {
      let x = e.pageX - cards.offsetLeft;
      let y = e.pageY - cards.offsetTop;

      cards.style.setProperty("--x", x + "px");
      cards.style.setProperty("--y", y + "px");
    };
  }, []);

  //handle logo preview
  const handlePreview = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCompanyDetails(prevInput => {return {...prevInput, logo: file}})
    } else {
      setCompanyDetails(prevInput => {return {...prevInput, logo: ''}})
    }
  };

  const handleNext = () => {
    console.log(companyDetails);
    navigate("/create-admin", { state: companyDetails });
  };

  return (
    <div className="text-lg text-white bg-[#222] flex justify-center items-center w-lvw min-h-lvh p-5">
      <div
        id="card"
        className="relative bg-[#2d2d2d] w-[30rem] h-[30rem] p-8 rounded-lg shadow-lg
          before:absolute before:top-[--y] before:left-[--x] before:content-[''] before:opacity-0 hover:before:opacity-100 before:rounded-full
          overflow-hidden"
      >
        {/* <div className="company-details">
          <span>Company Details</span>
        </div> */}
        <div className="z-20 relative font-bold text-xl text-black flex flex-col gap-10 w-full h-full rounded-full">
          <section className="relative">
            <input
              type="text"
              name="companyName"
              id="companyName"
              onChange={(e) => setCompanyDetails(prevInput => {return {...prevInput, company: e.target?.value}})}
              className="peer w-full px-5 py-2 rounded-full outline-none"
            />
            <label
              htmlFor="companyName"
              className={`absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full ${
                companyDetails?.company &&
                "peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full"
              } duration-700 cursor-pointer`}
            >
              Company Name
            </label>
          </section>

          <section className="relative">
            <input
              type="text"
              name="ownerName"
              id="ownerName"
              onChange={(e) => setCompanyDetails(prevInput => {return {...prevInput, owner: e.target?.value}})}
              className="peer w-full px-5 py-2 rounded-full outline-none"
            />
            <label
              htmlFor="ownerName"
              className={`absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full ${
                companyDetails?.owner &&
                "peer-valid:-top-4 peer-valid:left-4 peer-valid:backdrop-blur-sm peer-valid:rounded-full"
              } duration-700 cursor-pointer`}
            >
              Owner Name
            </label>
          </section>

          <section className="relative mx-auto">
            <input
              type="file"
              name="logo"
              id="logo"
              onChange={handlePreview}
              className="hidden"
            />
            <label
              htmlFor="logo"
              className="flex gap-5 items-center bg-white w-full px-8 py-2 rounded-md cursor-pointer"
            >
              <span>Import Your Logo</span>
              <CiImport className="size-8" />
            </label>

            {companyDetails.logo ? (
              <img src={URL.createObjectURL(companyDetails.logo)} className="w-[100px] h-[100px] mx-auto mt-[10px] rounded-full" />
            ) : (
              <p className="text-center text-red-700">not selected</p>
            )}
          </section>

          <button
            onClick={handleNext}
            className="text-white bg-green-600 w-fit ml-auto mt-auto px-5 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
