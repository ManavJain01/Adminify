// Importing React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Importing React Packages
import { Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

// Importing Redux Packages
import { useSelector } from "react-redux";

// Importing Local Files
import CheckoutSummary from './checkout/CheckoutSummary';
import BillingInfo from './checkout/BillingInfo'
import CompanyDetails from './checkout/CompanyDetails'
import StripePayment from "../StripePayment";

export default function Checkout() {
  // useNavigate
  const navigate = useNavigate();

  // useSelector
  const cart = useSelector(state => state.cart.cart);

  // useState
  const [section, setSection] = useState(1);

  // useEffect
  useEffect(() => {
    if(cart?.length === 0) navigate("/cart");
  }, []);

  return (
    <div className="flex flex-wrap gap-20 items-start justify-between px-48 py-20">
      <div className="flex-1 flex flex-col gap-3">
        <Link to="/cart" className="text-lg text-green-700 flex items-center gap-1">
          <MdKeyboardArrowLeft className="size-5" />
          <span>Back</span>
        </Link>
        <h1 className="tracking-wider font-semibold text-3xl">Checkout</h1>
        
        <div className="text-xs flex items-center gap-2">
          <p className={`${section === 1 && "text-blue-500"}`}>Billing Information</p>
          <MdOutlineKeyboardArrowRight />
          <p className={`${section === 2 && "text-blue-500"}`}>Company Details</p>
          <MdOutlineKeyboardArrowRight />
          <p className={`${!section && "text-blue-500"}`}>Payment</p>
        </div>

        <BillingInfo save={section} setSave={setSection} />

        <CompanyDetails save={section} setSave={setSection} />
        
        {!section
          // && <button className="font-semibold text-black bg-white py-2">Save Details & Tokenize</button>
          && <StripePayment />
        }
      </div>

      <CheckoutSummary />
    </div>
  )
}