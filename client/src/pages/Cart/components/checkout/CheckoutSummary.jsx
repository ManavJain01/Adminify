// Importing React Icons
import { SiNicehash } from "react-icons/si";

// Importing React Packages
import { Link } from "react-router-dom";

import CheckoutItems from './CheckoutItems'

export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-2xl">Order Summary</span>
      <section className="flex gap-5 justify-between">
        <span className="">Total Items</span>
        <Link to="/cart" className="underline">Edit Order</Link>
      </section>
      <hr className="border-gray-500" />

      <div className="flex flex-col">
        <div className="flex gap-40 justify-between items-center">
          <h1 className="">Subtotal <span className="text-sm">(INR)</span></h1>
          <p className="">Price</p>
        </div>

        <div className="flex gap-40 justify-between items-center">
          <h1 className="">Gst and Fees <span className="text-sm">(INR)</span></h1>
          <p className="">Price</p>
        </div>
      </div>
      <hr className="border-gray-500" />

      <div className="flex gap-40 justify-between items-center">
        <h1 className="text-2xl">Total <span className="text-sm">(INR)</span></h1>
        <p className="text-xl">Price</p>
      </div>

      <p className="text-sm flex items-center justify-center gap-2">
        <SiNicehash />
        <span>Nice! You saved  ₹4,560.00 on your order.</span>
      </p>

      <CheckoutItems />
    </div>
  )
}