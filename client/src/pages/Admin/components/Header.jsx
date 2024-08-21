// Importing React Icons
import { CiUser } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { MdAccountBox } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { RiHome4Line } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";

// Importing React Packages
import { Link } from "react-router-dom";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function Header({ companyDetails, user = {} }) {
  // Custom Hookes
  const { logout: logoutService, getUser } = useUser();

  return (
    <nav className="bg-blue-950 flex items-center justify-between gap-5 min-h-32 p-5">
      <div className="flex gap-3 items-center">
        {companyDetails.logo
        ?<img src={companyDetails?.logo} alt="logo" className="size-20 rounded-full" />
        :<CiUser className="size-20" />
        }
        <span className="font-bold text-4xl">
          {companyDetails.company || "Company Name"}
        </span>
      </div>

      <ul className="text-xl flex gap-8 items-center">
        <li className="hover:underline flex gap-2 items-center relative group">
          <FaCircleUser className="size-8" />
          <span className="absolute -bottom-8 -left-5 text-sm whitespace-nowrap hidden group-hover:flex">{`Hi, ${user.name || "User"}`}</span>
        </li>
        <li className="hover:underline">
          <Link to="/admin" className="relative group flex flex-col gap-1 items-center">
            <RiHome4Line className="size-8" />
            <span className="absolute -bottom-8 text-sm whitespace-nowrap hidden group-hover:flex">Home</span>
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/about-us" className="relative group flex flex-col gap-1 items-center">
            <FcAbout className="size-8" />
            <span className="absolute -bottom-8 text-sm whitespace-nowrap hidden group-hover:flex">About Us</span>
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/contact-us" className="relative group flex flex-col gap-1 items-center">
            <MdOutlinePermPhoneMsg className="size-8" />
            <span className="absolute -bottom-8 text-sm whitespace-nowrap hidden group-hover:flex">Contact Us</span>
          </Link>
        </li>
        <li className="hover:underline">
          <Link to="/admin/settings" className="relative group flex flex-col gap-1 items-center">
            <MdAccountBox className="size-8" />
            <span className="absolute -bottom-8 text-sm whitespace-nowrap hidden group-hover:flex">Account</span>
          </Link>
        </li>
        <li className="hover:underline">
          <button onClick={() => logoutService()} className="relative group flex flex-col gap-1 items-center">
            <CiLogout className="text-red-600 size-8" />
            <span className="absolute -bottom-8 text-sm whitespace-nowrap hidden group-hover:flex">Log Out</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
