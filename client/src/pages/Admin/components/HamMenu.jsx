// Importing React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { RiHome4Line } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

// Importing React Packages
import {Link} from 'react-router-dom';
import { useState } from 'react';

export default function HamMenu({ companyDetails, user= {} }) {
  // useState
  const [openMenu, setOpenMenu] = useState(false);
  
  return (
    <nav className="relative bg-blue-950 flex items-center justify-between gap-5 min-h-32 p-5">
      <div className="flex gap-3 items-center">
        {companyDetails.logo
        ?<img src={companyDetails?.logo} alt="logo" className="size-20 rounded-full" />
        :<CiUser className="size-20" />
        }
        <span className="font-bold text-4xl">
          {companyDetails.company || "Company Name"}
        </span>
      </div>

      <button onClick={() => setOpenMenu(!openMenu)}>{
        openMenu
          ? <RxCross2 className="size-9" />
          : <GiHamburgerMenu className="size-9" />
      }</button>

      {openMenu
        && <div className="z-[999999] absolute top-[90px] right-0 text-lg bg-blue-950 bg-opacity-80 backdrop-blur-md flex flex-col gap-5 w-[250px] p-5 rounded-lg shadow-md shadow-gray-900">
          <ul className="text-xl flex flex-col gap-8 items-center">
            <li className="hover:underline flex gap-5 items-center relative group">
              <FaCircleUser className="size-8" />
              <span className="text-sm whitespace-nowrap group-hover:flex">{`Hi, ${user.name || "User"}`}</span>
            </li>
            <li className="hover:underline">
              <Link to="/" className="group flex gap-5 items-center">
                <RiHome4Line className="size-8" />
                <span className="text-sm whitespace-nowrap group-hover:flex">Home</span>
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/about-us" className="group flex gap-5 items-center">
                <FcAbout className="size-8" />
                <span className="text-sm whitespace-nowrap group-hover:flex">About Us</span>
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact-us" className="group flex gap-5 items-center">
                <MdOutlinePermPhoneMsg className="size-8" />
                <span className="text-sm whitespace-nowrap group-hover:flex">Contact Us</span>
              </Link>
            </li>
            <li className="hover:underline">
              <Link to="/admin/settings" className="group flex gap-5 items-center">
                <MdAccountBox className="size-8" />
                <span className="text-sm whitespace-nowrap group-hover:flex">Account</span>
              </Link>
            </li>
            <li className="hover:underline">
              <button onClick={() => logoutService()} className="group text-red-600 flex gap-5 items-center">
                <CiLogout className="size-8" />
                <span className="text-sm whitespace-nowrap group-hover:flex">Log Out</span>
              </button>
            </li>
          </ul>
        </div>
      }
    </nav>
  )
}