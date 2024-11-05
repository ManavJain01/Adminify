// importing React Icons
import { RiDeleteBin5Line } from "react-icons/ri";

// importing Redux Packages
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../Redux/features/CartSlice"

export default function ProductCard({item = {}}) {
  // useDispatch
  const dispatch = useDispatch();

  // Functions
  const handleClickForRemove = async () => {
    dispatch(removeFromCart(item?.tag));
  }
  
  return (
    <div className="flex gap-3 items-center h-40 min-w-[40rem] pr-5 border border-gray-500 rounded-lg">
      <img src={item?.img} alt="img" className="h-full rounded-lg" />

      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-xl">{item?.headline} <span>({item?.tag})</span></h1>
        <p className="">{item?.description}</p>
        <p>Duration</p>
      </div>

      <div className="flex flex-col gap-3 items-end">
        <p className="text-sm">₹ {item?.value}</p>
        <button onClick={handleClickForRemove}><RiDeleteBin5Line /></button>
      </div>
    </div>
  )
}