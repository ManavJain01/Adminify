// Importing React Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

// Importing React Package
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Importing Redux Package
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../Redux/features/CartSlice";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function PricesProductCard({index = 0, item, length = 0}) {
  // useNavigate
  const navigate = useNavigate();

  // useSelector
  const cart = useSelector(state => state.cart.cart);
    
  // useDispatch
  const dispatch = useDispatch();

  // Custom Hooks
  const { isLogin } = useUser();
  
  // useState
  const [doesContain, setDoesContain] = useState(false);

  // useMemo
  useMemo(() => {
    if(cart.length === 0) setDoesContain(false);
    else {
      cart.map((i) => {
        if(i?.tag === item?.tag) setDoesContain(true);
      })
    }
  }, [cart]);

  // Functions
  const handleClickToAdd = async (e) => {    
    dispatch(addToCart(e));
    
    if(isLogin) navigate("/cart");
    else navigate("/login");
  }

  const handleClickToRemove = async (e) => {
    dispatch(removeFromCart(e?.tag));
  }

  return (
    <div className={`${index+1 === length && "text-black bg-white"} flex flex-col gap-12 md:max-w-[25rem] h-[35rem] p-5 border border-gray-600 rounded-xl`}>
      <p className={`${index+1 === length ? "bg-gray-300" : "bg-gray-600"} rounded-xl w-fit py-1 px-3`}>{item?.tag}</p>

      <section className="flex flex-col gap-5">
        <p className="font-semibold text-3xl">{item?.headline}</p>
        <p className="text-gray-400">{item?.description}</p>
        {doesContain
          ? <div className="flex items-center gap-3">
            <p className="flex-1 text-center text-white bg-blue-700 hover:bg-blue-800 py-2 rounded-full duration-500">Added</p>
            <button onClick={() => handleClickToRemove(item)} className={`p-2 border ${index+1 === length ? "border-black hover:bg-gray-300" : "hover:bg-gray-800"} rounded-full hover:opacity-55 duration-500`}><MdDeleteOutline className="size-5" /></button>
          </div>
          : <button onClick={() => handleClickToAdd(item)} className="group text-white bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-5 py-2 rounded-full duration-500">
            <span className="group-hover:hidden font-semibold">{item?.price}</span>
            <span className="hidden group-hover:block font-semibold">Purchase</span>
            <FaArrowRightLong className="size-3 group-hover:size-4" />
          </button>
        }
      </section>

      <div className="flex flex-col gap-2">
        {item?.benefits?.map((e, j) =>
          <div key={j} className="flex items-center gap-3">
            <FaCheckCircle />
            <p className={`border-b-2 border-dotted ${index+1 === length && "border-black"}`}>{e}</p>
          </div>
        )}
      </div>
    </div>
  )
}