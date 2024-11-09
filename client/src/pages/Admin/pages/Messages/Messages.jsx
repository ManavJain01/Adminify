// Importing React Icons
import { RiLoader4Fill } from "react-icons/ri";

// Importing React Packages
import { useEffect, useRef } from "react";

// Importing local files
import Message from "./Message";
import MessageSkeleton from "./MessageSkeleton";

// Importing Custom Hooks
import { useChat } from "../../../../hooks/useChat";

export default function Messages() {
  // useRef
  const lastMessageRef = useRef();

  // Custom Hooks
  const { messages, loading } = useChat();

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }, [messages])
  
  return (
    <div className="custom-scrollbar2 px-4 flex-1 flex flex-col gap-5 py-5 overflow-auto">
      {!loading && messages.length>0 && messages.map((message, index) => {
        return(
          <div key={index} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        )
      })}
      {loading && [...Array(4)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && <p className="text-center">Send a message to start the conversation</p>}
    </div>
  );
}
