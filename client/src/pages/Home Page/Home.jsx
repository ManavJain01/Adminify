// Importing Local Components
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

export default function Home() {
  return (
    <div className="custom-scrollbar relative text-white bg-black flex flex-col justify-between h-lvh w-lvw overflow-x-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}