import { Link } from "react-router-dom"

export default function SuccessfullPayment() {
  return (
    <div className="relative flex flex-col justify-center items-center w-lvw h-lvh">
      <img src="https://i.gifer.com/origin/41/41340ab1a4529c7dd753f03268087e08_w200.gif" alt="gif" className="w-[600px]" />
      <span className="relative bottom-32 font-bold text-2xl text-green-500">Payment is Successfull</span>
      
      <div className="flex gap-5 items-center">
        <Link to="/admin" className="relative bottom-28 text-white bg-green-600 px-5 py-2 rounded-xl">Go To Admin Dashboard</Link>
        <Link to="/" className="relative bottom-28 text-white bg-green-600 px-5 py-2 rounded-xl">Go To Home Dashboard</Link>
      </div>
    </div>
  )
}