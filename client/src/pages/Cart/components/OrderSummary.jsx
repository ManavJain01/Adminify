// Importing React Icons
import { SiNicehash } from "react-icons/si";

// Importing React Packages
import { Link, useNavigate } from "react-router-dom";

// Importing Redux Packages
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function OrderSummary() {
  // useSelector
  const cart = useSelector(state => state.cart.cart);
  const user = useSelector(state => state.user.data);

  // useNavigate
  const navigate = useNavigate();

  // Custom Hooks
  const { isLogin } = useUser();

  // useState
  const [totalAmount, setTotalAmount] = useState(0);
  
  // useEffect
  useEffect(() => {
    const calculatedTotal = cart?.reduce((acc, item) => acc + (item?.value || 0), 0);
    setTotalAmount(calculatedTotal);
  }, [cart]); 

  // Functions
  const handleClick = async () => {
    if(isLogin) navigate("/checkout");
    else navigate("/login");
  };
  
  return (
    <div className="flex flex-col gap-5">
      <span className="text-2xl">Order Summary</span>
      <span className="">{cart?.length} {cart?.length > 1 ? "Items" : "Item"}</span>
      <hr className="border-gray-500" />

      <div className="flex gap-40 justify-between items-center">
        <h1 className="text-2xl">Subtotal <span className="text-sm">(INR)</span></h1>
        <p className="text-xl">₹ {totalAmount}</p>
      </div>

      <p className="text-xs text-center">Subtotal does not include applicable taxes</p>
      <p className="text-sm flex items-center justify-center gap-2">
        <SiNicehash />
        <span>Nice! You saved  ₹4,560.00 on your order.</span>
      </p>

      {user?.companyId
        ? <Link to="/contact-us" className="font-bold text-center text-black bg-white hover:bg-white/80 py-2">Contact Us</Link>
        : <button onClick={handleClick} className="font-bold text-center text-black bg-white hover:bg-white/80 py-2">I'm Ready to Pay</button>
      }
    </div>
  )
}