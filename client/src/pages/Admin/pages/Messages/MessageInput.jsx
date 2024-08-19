// Importing React Icons
import { BsSend } from "react-icons/bs";
import { RiLoader4Fill } from "react-icons/ri";

// Importing React Packages
import { useState } from "react";

// Importing Custom Hooks
import { useChat } from "../../../../hooks/useChat"

export default function MessageInput() {
  // Custom Hooks
  const { loading, sendMessage } = useChat();

  // useState
  const [showTyping, setShowTyping] = useState(false);
  const [message, setMessage] = useState("");

  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-col px-4 my-3">
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
          value={message}
          onChange={(e) => {
            setShowTyping(true)
            setMessage(e.target.value)}}
          onBlur={() => setShowTyping(false)}
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white outline-none"
        />

        {loading
          ?<RiLoader4Fill className="absolute inset-y-1 end-2 size-8 animate-spin" />
          :<button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <BsSend />
          </button>
        }
      </div>
    </form>
  );
}
