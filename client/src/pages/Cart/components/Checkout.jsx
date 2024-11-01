// Importing React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";

// Importing React Packages
import {Link} from 'react-router-dom';
import { useState } from 'react';

// Importing Local Files
import CheckoutSummary from './checkout/CheckoutSummary';
import CheckoutForm from './checkout/CheckoutForm'

export default function Checkout() {
  // useState
  const [billingInfoSave, setBillingInfoSave] = useState(false);

  return (
    <div className="flex flex-wrap gap-20 items-start justify-between px-48 py-20">
      <div className="flex-1 flex flex-col gap-3">
        <Link to="/cart" className="text-lg text-green-700 flex items-center gap-1">
          <MdKeyboardArrowLeft className="size-5" />
          <span>Back</span>
        </Link>
        <h1 className="tracking-wider font-semibold text-3xl">Checkout</h1>
        
        <CheckoutForm save={billingInfoSave} setSave={setBillingInfoSave} />

        {billingInfoSave
          && <button className="font-semibold text-black bg-white py-2">Save Details & Tokenize</button>
        }
      </div>

      <CheckoutSummary />
    </div>
  )
}