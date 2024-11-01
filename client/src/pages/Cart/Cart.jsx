// Importing React Icons
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Importing React Packages
import { useState } from 'react';
import {Link} from 'react-router-dom';

// Importing Local Files
import OrderSummary from './components/OrderSummary'
import ProductCard from "./components/ProductCard"

export default function Cart() {
  // useState
  const [cartItems, setCartItems] = useState([""]);

  if(!cartItems || ( Array.isArray(cartItems) && cartItems.length === 0 )) return (
    <div className="text-5xl flex flex-col gap-5 items-center justify-center px-10 py-20">
      <MdOutlineAddShoppingCart className="size-80" />
      <span>Your cart is empty</span>
    </div>
  )
  else return (
    <div className="flex flex-wrap gap-5 items-start justify-between px-10 py-20">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-3xl">Your Cart</h1>
          <p>{import.meta.env.VITE_REACT_APP_WebsiteName || "Please enter website name"} is a trusted growth partner to millions of everyday entrepreneurs.</p>
        </div>

        <ProductCard />
      </div>

      <OrderSummary />
    </div>
  )
}