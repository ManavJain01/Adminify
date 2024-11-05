// Importing React Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

// Importing React Packages
import { useState } from "react";

export default function CheckoutProductCard({item = {}}) {
  // useState
  const [showItems, setShowItems] = useState(false);

  return (
    <div className="flex flex-col gap-4 px-5 py-3 border border-gray-600 rounded-lg">
      <div className="flex gap-5 justify-between items-center">
        <span className="font-semibold text-lg">{item?.headline}</span>

        <div className="flex flex-col gap-2">
          <p className="text-xs">{item?.price}</p>
        </div>
      </div>

      <div className="font-semibold text-gray-400 flex flex-col gap-3">
        <p className="">Duration</p>

      </div>
    </div>
  )
}