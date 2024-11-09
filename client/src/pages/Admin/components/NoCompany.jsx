// Importing routing
import { Link } from "react-router-dom"

export default function NoCompany({user= {}}) {
  const firstName = user?.name?.substring(0, user.name.indexOf(' ')) || user?.name;
  
  return (
    <div className="text-white bg-blue-950 flex flex-col items-center gap-5 w-lvw h-lvh p-10">
      <div className="bg-[#0f1b3d] flex flex-wrap items-center justify-around gap-5 w-[30rem] h-12 px-10 py-3 rounded-full">
        <span className="hover:text-sky-300 active:text-sky-600">Hi, {firstName ? firstName : "User"}</span>
        <Link to="/" className="hover:text-sky-300 active:text-sky-600">Home</Link>
        <Link to="/pricing" className="hover:text-sky-300 active:text-sky-600">Pricing</Link>
        <Link to="/cart" className="hover:text-sky-300 active:text-sky-600">Cart</Link>
      </div>

      <div className="text-4xl text-sky-300 flex flex-col items-center gap-5">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/smart-unemployed-businessman-using-magnifying-glass-to-looking-at-stack-of-boxes-with-the-word-jobs-illustration-download-in-svg-png-gif-file-formats--finding-job-searching-business-career-pack-illustrations-8016988.png" alt="unemployed" />
        <span> You are not employed by any company!!!</span>
        <span>Contact any company user</span>
      </div>
    </div>
  )
}