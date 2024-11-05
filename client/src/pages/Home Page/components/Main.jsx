// Importing React Icons
import { FaArrowRightLong } from "react-icons/fa6";

// Importing React Packages
import { Link } from "react-router-dom";

// Importing Local Components
import Features from './Features'
import Testimonials from './Testimonials'
import Templates from './Templates'
import FAQs from "./FAQs";

export default function Main() {
  return (
    <div className="flex flex-col gap-40">
      <div className="bg-[url('https://frontegg.com/wp-content/uploads/2023/11/BG-scaled.jpg.webp')] bg-cover bg-center flex flex-col gap-40 min-h-screen p-10">
        <div className="flex flex-col gap-5">
          <pre className="text-5xl leading-relaxed">
            {import.meta.env.VITE_REACT_APP_WebsiteName || "Enter Website Name"} <br />
            The next generation <br />
            of <span className="font-bold text-black bg-[#F5F5DC] p-2 rounded-xl">Website Builder</span>
          </pre>
          <p className="text-xl w-[50rem]">Custom Websites Tailored for Your Business Needs. From design templates to integrated features, customers can build professional websites that reflect their brand.</p>
          <Link to="/pricing" className="font-semibold bg-blue-600 hover:bg-blue-700 flex items-center gap-5 w-fit py-2 px-6 rounded-full">
            <span>Pricing</span>
            <FaArrowRightLong />
          </Link>
        </div>

        <Features />
      </div>
      <Templates />
      <Testimonials />
      <FAQs />
    </div>
  )
}