// Importing React Packages
import { useSelector } from "react-redux";

// Importing Local Files
import LockForNoAuthentication from "../components/LockForNoAuthentication";

export default function Broadcast() {
  // useSelector
  const user = useSelector(state => state.user.data);
  const privilege = user.privilege;

  return (
    <div className="relative bg-blue-950 flex flex-col gap-10 h-full w-full px-8 py-5 rounded-xl shadow-xl">
      {privilege === "user" && <LockForNoAuthentication />}
      
      <div className="flex items-center justify-between gap-5">
        <h1 className="font-bold text-3xl tracking-widest inline-blk">Broadcast</h1>
      </div>

      <div className="flex flex-col gap-5">
        <button className="bg-green-700 hover:bg-green-800 active:bg-green-900 px-5 py-2 rounded-xl duration-700">Broadcast via Text Message</button>
        <button className="bg-green-700 hover:bg-green-800 active:bg-green-900 px-5 py-2 rounded-xl duration-700">Broadcast via Whatsapp</button>
        <button className="bg-green-700 hover:bg-green-800 active:bg-green-900 px-5 py-2 rounded-xl duration-700">Broadcast via Email</button>
      </div>
    </div>
  );
}
