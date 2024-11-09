// Importing React Icons
import { FaArrowRightLong } from "react-icons/fa6";

// Importing React Packages
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Footer() {
  // useSelector
  const user = useSelector(state => state.user.data);
  
  const Card = () => {
    return (
      <div className="text-white bg-[url('https://frontegg.com/wp-content/uploads/2024/07/BG.png-1-scaled.webp')] bg-cover bg-center flex justify-around min-h-[20rem] my-10 p-10 border border-gray-600 rounded-xl">
        <p className="text-6xl">10X <br /> User Management</p>

        <div className="flex flex-col gap-5">
          <p className="text-lg">
            Join thousands of customers who already use {import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"} to
            <br /> scale their products faster and make them more secure.
          </p>

          <div className="flex gap-5">
            <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-3 px-8 py-2 rounded-full duration-500">
              <span>Get started for free</span>
              <FaArrowRightLong />
            </Link>
            <Link to="/contact-us" className="hover:text-blue-600 hover:bg-white px-8 py-2 border rounded-full duration-500">Talk to us</Link>
          </div>
        </div>
      </div>
    )
  }

  const NavigationBar = () => {
    return (
      <div className="flex justify-around">
        <div className="flex flex-col gap-3 items-center">
          <p className="font-bold text-white">Platform</p>
          <Link to="pricing" className="hover:text-blue-500 duration-500">Pricing</Link>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <p className="font-bold text-white">Resources</p>
          <Link to="faqs" className="hover:text-blue-500 duration-500">FAQs</Link>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <p className="font-bold text-white">Company</p>
          <Link to="about-us" className="hover:text-blue-500 duration-500">About Us</Link>
          <Link to="contact-us" className="hover:text-blue-500 duration-500">Contact Us</Link>
        </div>
      </div>
    )
  }

  const LastSection = () => {
    return (
      <>
        <hr className="my-5 border-gray-700" />
        <div className="flex justify-between items-center">
          <Link to="/" className="font-semibold text-2xl text-white">{import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"}</Link>

          <section className="text-xs flex gap-1">
            <p>© 2024 {import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"}™</p>
            <p>|</p>
            <p>All rights reserved</p>
            <p>|</p>
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Use</p>
          </section>
        </div>
      </>
    )
  }

  return (
    <div className="text-gray-500 flex flex-col px-10 py-5">
      {!user?.companyId && <Card /> }
      <NavigationBar/>
      <LastSection />
    </div>
  )
}