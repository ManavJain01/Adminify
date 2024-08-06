// Importing React Icons
import { CiUser } from "react-icons/ci";

// Importing React Packages
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function Header() {
  // redux
  const user = useSelector(state => state.user.data) || {};  

  // Custom Hookes
  const { logout : logoutService, getUser } = useUser();

  // Variables
  const navbar = [
    {
      name: `Hi, ${user.name || 'User'}`,
    },
    {
      name: "Home",
      link: '/admin'
    },
    {
      name: "About",
    },
    {
      name: "Contact Us",
    },
    {
      name: "My Account",
    },
    {
      name: "Log Out",
    }
  ]

  useEffect(() => {
    getUser();
  }, [])

  return (
    <nav className="bg-blue-950 flex items-center justify-between gap-5 min-h-32 p-5">
      <div className="flex gap-3 items-center">
        <CiUser className="size-16" />
        <span className="text-3xl">{user.company || 'Company Name'}</span>
      </div>

      <ul className="text-xl flex gap-8">
        <li>{`Hi, ${user.name || 'User'}`}</li>
        <li><Link to='/'>Home</Link></li>
        <li>About</li>
        <li>Contact Us</li>
        <li>My Account</li>
        <li><button onClick={() => logoutService()}>Log Out</button></li>
      </ul>
    </nav>
  )
}