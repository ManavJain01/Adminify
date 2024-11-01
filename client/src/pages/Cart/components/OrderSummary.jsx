// Importing React Icons
import { SiNicehash } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-2xl">Order Summary</span>
      <span className="">Total Items</span>
      <hr className="border-gray-500" />

      <div className="flex gap-40 justify-between items-center">
        <h1 className="text-2xl">Subtotal <span className="text-sm">(INR)</span></h1>
        <p className="text-xl">Price</p>
      </div>

      <p className="text-xs text-center">Subtotal does not include applicable taxes</p>
      <p className="text-sm flex items-center justify-center gap-2">
        <SiNicehash />
        <span>Nice! You saved  ₹4,560.00 on your order.</span>
      </p>

      <Link to="/checkout" className="font-bold text-center text-black bg-white hover:bg-white/80 py-2">I'm Ready to Pay</Link>
    </div>
  )
}