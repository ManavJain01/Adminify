// Importing React Icons
import { CiUser } from "react-icons/ci";

// Importing React Packages
import { Link } from 'react-router-dom'

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function Header({user}) {
  // Custom Hookes
  const { logout : logoutService, getUser } = useUser();

  return (
    <nav className="bg-blue-950 flex items-center justify-between gap-5 min-h-32 p-5">
      <div className="flex gap-3 items-center">
        <CiUser className="size-16" />
        <span className="font-bold text-4xl">{user.company || 'Company Name'}</span>
      </div>

      <ul className="text-xl flex gap-8">
        <li className="hover:underline">{`Hi, ${user.name || 'User'}`}</li>
        <li className="hover:underline"><Link to='/admin'>Home</Link></li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Contact Us</li>
        <li className="hover:underline">My Account</li>
        <li className="hover:underline"><button onClick={() => logoutService()}>Log Out</button></li>
      </ul>
    </nav>
  )
}