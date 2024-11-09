// Importing React Icons
import { AiOutlineExport } from "react-icons/ai";

// Importing React Packages
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"

// Importing Services
import { makePayment } from "../../services/service";

export default function StripePayment() {
  // useSelector
  const cartData = useSelector(state => state.cart.cart);
  const companyData = useSelector(state => state.company);
  const user = useSelector(state => state.user.data);

  // Functions
  const handlePayment = async () => {
    try {      
      const res = await makePayment(cartData, companyData);
      
    } catch (error) {
      console.error(error.message);
    }
  };

  if(user?.companyId) return (
    <Link to="/contact-us" className="font-bold text-lg text-black bg-white flex items-center justify-center gap-3 py-2">Contact Us</Link>
  )
  return (
    <button onClick={handlePayment} className="font-bold text-lg text-black bg-white flex items-center justify-center gap-3 py-2">
      <span>Continue Purchase</span>
      <AiOutlineExport />
    </button>
  )
}