// Importing React Icons
import { FaPlus } from "react-icons/fa";

// Importing React Packages
import { useState, useEffect } from "react";

// Importing Framer Motion
import { motion } from "framer-motion";
// import { handleMouseLeave, handleMouseMove, scale, rotateX, rotateY } from "./tiltCard";

export default function CreateSubscription() {
  // useState
  const [isWritable, setIsWritable] = useState(false);
  const [subscription, setSubscription] = useState({});

  if(isWritable) return (
    <div>CreateSubscription</div>
  );
  else return (
    <button onClick={() => setIsWritable(!isWritable)} className="bg-gradient-to-br from-blue-500 to-pink-500 flex justify-center items-center h-[35rem] w-[20rem] rounded-xl shadow-lg">
      <FaPlus className="text-4xl" />
    </button>
  );
}