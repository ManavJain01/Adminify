// Importing React Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Importing React Packages
import { useState } from 'react';
import {Link} from 'react-router-dom';

// Importing Reux Packages
import { useSelector } from 'react-redux';

// Importing Local Files
import OrderSummary from './components/OrderSummary'
import ProductCard from "./components/ProductCard"

export default function Cart() {
  // useSelector
  const cartItems = useSelector(state => state.cart.cart);

  if(!cartItems || ( Array.isArray(cartItems) && cartItems.length === 0 )) return (
    <div className="relative text-5xl flex flex-col gap-5 items-center justify-center px-10 py-20">
      <MdOutlineAddShoppingCart className="size-80" />
      <span>Your cart is empty</span>

      <Link to="/pricing" className="absolute top-10 right-20 text-xl text-center backdrop-blur-xl bg-opacity-60 bg-slate-950 w-72 h-40 py-12 p-5 rounded-2xl">
        Click Here To Checkout Our Prices
      </Link>
    </div>
  )
  else return (
    <div className="flex flex-wrap gap-5 items-start justify-between px-10 pr-48 py-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl">Your Cart</h1>
          <p>{import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"} is a trusted growth partner to millions of everyday entrepreneurs.</p>
        </div>

        {cartItems?.map((e, i) => {
          return(
            <ProductCard key={i} item={e} />
          )
        })}
      </div>

      <OrderSummary />
    </div>
  )
}