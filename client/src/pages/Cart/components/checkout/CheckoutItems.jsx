// Importing React Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Importing React Packages
import { useState } from "react";

// Importing Redux Packages
import { useSelector } from "react-redux";

// Importing Local Components
import CheckoutProductCard from "./CheckoutProductCard";

export default function CheckoutItems() {
  // useSelector
  const cart = useSelector(state => state.cart.cart);

  // useState
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="flex flex-col gap-8 w-[25rem] px-5 py-7 border border-gray-600 rounded-lg">
      <button onClick={() => setShowItems(!showItems)} className="text-2xl flex items-center gap-10 justify-between w-full">
        <span>Your {cart?.length > 1 ? "Items" : "Item"} ({cart?.length})</span>
        {showItems
          ?<IoIosArrowUp />
          :<IoIosArrowDown />
        }
      </button>

      {showItems && cart?.map((e, i) => <CheckoutProductCard key={i} item={e} />)}
    </div>
  )
}