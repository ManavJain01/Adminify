// Importing React Icons
import { BsSend } from "react-icons/bs";

// Importing React Packages
import { useState } from "react";

export default function MessageInput() {
  // useState
  const [showTyping, setShowTyping] = useState(false);
  return (
    <form className="relative flex flex-col px-4 my-3">
      <span
        className={`absolute right-0 ${
          showTyping ? "-top-7" : "top-0"
        } text-black bg-gray-100 opacity-50 px-5 mx-10 rounded-t-xl duration-700`}
      >
        Typing...
      </span>

      <div className="relative w-full">
        <input
          type="text"
          placeholder="Send a message"
          onChange={() => setShowTyping(true)}
          onBlur={() => setShowTyping(false)}
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white outline-none"
        />

        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <BsSend />
        </button>
      </div>
    </form>
  );
}
