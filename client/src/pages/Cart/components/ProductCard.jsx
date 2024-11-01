// importing React Icons
import { RiDeleteBin5Line } from "react-icons/ri";

export default function ProductCard() {
  return (
    <div className="flex gap-3 items-center h-40 min-w-[40rem] px-5 py-3 border border-gray-500 rounded-lg">
      <img src="" alt="img" />

      <div className="flex-1 flex flex-col gap-3">
        <h1 className="text-xl">Headline</h1>
        <p>Duration</p>
      </div>

      <div className="flex flex-col gap-3 items-end">
        <p className="text-sm">₹ Price</p>
        <button><RiDeleteBin5Line /></button>
      </div>
    </div>
  )
}