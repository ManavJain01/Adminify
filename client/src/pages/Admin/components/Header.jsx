// Importing React Icons
import { CiUser } from "react-icons/ci";

// Importing React Packages
import { Link, useNavigate } from "react-router-dom";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";
import { useEffect, useState } from "react";

export default function Header({ data }) {
  const navigate = useNavigate();

  // console.log("in Header: ", data);
  const admin = data.admin;
  const company = data.company;

  return (
    <nav className="bg-blue-950 flex items-center justify-between gap-5 min-h-32 p-5">
      <div className="flex gap-3 items-center">
        <CiUser className="size-16" />
        <span className="font-bold text-4xl">
          {company.company || "Company Name"}
        </span>
      </div>

      <ul className="text-xl flex gap-8">
        <li className="hover:underline">{`Hi, ${admin.name || "User"}`}</li>
        <li className="hover:underline">
          <Link to="/admin">Home</Link>
        </li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Contact Us</li>
        <li className="hover:underline">
          <Link to="/admin/settings">My Account</Link>
        </li>
        <li className="hover:underline">
          <button
            onClick={() => {
              localStorage.removeItem("authToken");
              navigate("/");
            }}
          >
            Log Out
          </button>
        </li>
      </ul>
    </nav>
  );
}
