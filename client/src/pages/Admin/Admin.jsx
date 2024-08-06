// Importing routing
import { Outlet } from 'react-router-dom'

// Importing React Packages
import { useEffect } from "react";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useUser } from "../../hooks/useUser";

// Importing Local files
import Header from './components/Header'
import Footer from './components/Footer'

export default function Admin() {
  // redux
  const user = useSelector(state => state.user.data) || {};  

  // Custom Hookes
  const { getUser } = useUser();

  useEffect(() => {
    getUser();
  }, [])
  
  return (
    <div className="text-lg text-white bg-[#222] flex flex-col w-lvw min-h-lvh">
      <Header user={user} />
      <div className="flex-1 p-5">
        <Outlet />
      </div>
      <Footer data={{company: user.company, owner:user.owner}} />
    </div>
  )
}