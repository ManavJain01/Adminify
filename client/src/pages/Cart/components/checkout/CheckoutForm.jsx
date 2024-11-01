// Importing React Icons
import { SiTicktick } from "react-icons/si";

// Importing React Packages
import { useState } from 'react';

export default function CheckoutForm({save = false, setSave}) {

  if(save) return (
    <div className="flex flex-col gap-3 p-5 border border-gray-500 rounded-lg">
      <p className="font-semibold text-xl flex justify-between gap-10">
        <span>Billing Information</span>
        <SiTicktick className="text-green-400" />
      </p>

      <div className="text-sm">
        <p className="flex justify-between gap-10">
          <span>Name</span>
          <button className="underline" onClick={() => setSave(false)}>Edit</button>
        </p>
        <p>Address</p>
      </div>
    </div>
  )
  else return (
    <form action="" className="flex flex-col gap-5 p-5 border border-gray-500 rounded-lg">
      <div>
        <p className="font-semibold text-xl">Billing Information</p>
        <p className="text-sm">All fields required unless otherwise stated.</p>
      </div>

      <div className="flex flex-wrap gap-5">
        <section className="relative flex-1">
          <label htmlFor="checkout-firstName" className="absolute text-xs top-1 left-3">First Name</label>
          <input type="text" id="checkout-firstName" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
        </section>

        <section className="relative flex-1">
          <label htmlFor="checkout-lastName" className="absolute text-xs top-1 left-3">Last Name</label>
          <input type="text" id="checkout-lastName" className="bg-black border w-full h-12 px-3 pt-4 outline-none" />
        </section>
      </div>

      <section className="group relative">
        <label htmlFor="checkout-phone" className="absolute top-3 left-3 group-hover:text-xs group-hover:top-1 duration-700">Phone Number</label>
        <input type="text" id="checkout-phone" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
      </section>

      <section className="group relative">
        <label htmlFor="checkout-building" className="absolute top-3 left-3 group-hover:text-xs group-hover:top-1 duration-700">Building / Society</label>
        <input type="text" id="checkout-building" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
      </section>

      <section className="group relative">
        <label htmlFor="checkout-street" className="absolute top-3 left-3 group-hover:text-xs group-hover:top-1 duration-700">Street Name / Landmark</label>
        <input type="text" id="checkout-street" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
      </section>

      <section className="group relative">
        <label htmlFor="checkout-city" className="absolute top-3 left-3 group-hover:text-xs group-hover:top-1 duration-700">City</label>
        <input type="text" id="checkout-city" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
      </section>

      <div className="flex flex-wrap gap-5">
        <section className="group relative">
          <label htmlFor="checkout-state" className="absolute top-3 left-3 group-hover:text-xs group-hover:top-1 duration-700">State</label>
          <input type="text" id="checkout-state" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
        </section>

        <section className="group relative">
          <label htmlFor="checkout-postal" className="absolute top-3 left-3 group-hover:text-xs group-hover:top-1 duration-700">Postal Code</label>
          <input type="text" id="checkout-postal" className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
        </section>
      </div>

      <button onClick={() => setSave(true)} className="font-bold text-black bg-white py-2">Save</button>
    </form>
  )
}