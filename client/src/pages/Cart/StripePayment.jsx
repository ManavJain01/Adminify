// Importing React Icons
import { AiOutlineExport } from "react-icons/ai";

// Importing Redux Packages
import { useSelector } from "react-redux"

// Importing Services
import { makePayment } from "../../services/service";


// Importing Stripe Packages
import { loadStripe } from '@stripe/stripe-js'

export default function StripePayment() {
  // useSelector
  const cartData = useSelector(state => state.cart.cart);
  const companyData = useSelector(state => state.company);

  // Functions
  const handlePayment = async () => {
    try {      
      const res = await makePayment(cartData, companyData);
      
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button onClick={handlePayment} className="font-bold text-lg text-black bg-white flex items-center justify-center gap-3 py-2">
      <span>Continue Purchase</span>
      <AiOutlineExport />
    </button>
  )
}