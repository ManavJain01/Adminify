// Importing React Packages
import { useEffect } from "react";

// Importing Local Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

// Importing Custom Hooks
import { useUser } from "../../hooks/useUser";

export default function Home() {
  // Custom Hookes
  const { getUser } = useUser();

  // useEffect
  useEffect(() => {
    const handleRefresh = async () => {
      if(localStorage.getItem("authToken")) await getUser();
    };

    handleRefresh();
  }, []);

  return (
    <div className="custom-scrollbar relative text-white bg-black flex flex-col justify-between h-lvh w-lvw overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}