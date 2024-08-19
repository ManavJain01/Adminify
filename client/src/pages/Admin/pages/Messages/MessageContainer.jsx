// Importing React Packages
import { useState, useEffect } from "react";

// Importing local files
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

// Importing Zustand
import useConversation from '../../../../zustand/useConversation'

// Importing Socket io
import { useSocketContext } from "../../../../context/SocketContext";

export default function MessageContainer() {
  // Variables
  let noChatSelected = true;

  // zustand
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  // socket io
  const { socket, typingStatus} = useSocketContext();
  
  // useState
  const [typingIndicator, setTypingIndicator] = useState("");

  // useEffect
  useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

  useEffect(() => {
    if (!socket || !selectedConversation) return;
    
    const typingUserId = typingStatus[selectedConversation._id];
    
    if (typingUserId) {
      // Show typing indicator only if the typing user is not the current user
      setTypingIndicator(typingUserId !== socket?.query?.userId ? "typing..." : "");
    } else {
      setTypingIndicator("");
    }
  }, [socket, selectedConversation, typingStatus]);

  if(selectedConversation) noChatSelected = false;
  return (
    <div className="w-full flex flex-col">
      {noChatSelected
        ?<NoChatSelected />
        :<>
          {/* Header */}
          <div className="bg-slate-500 flex gap-8 items-center px-4 py-2 mb-2">
            <div className="flex items-center gap-1">
              <span className="label-text">To: </span>
              <span className="font-bold text-gray-900">{selectedConversation?.name}</span>
            </div>
            {typingIndicator
              &&<span className="text-sm opacity-50">{typingIndicator}</span>
            }
          </div>

          <Messages />
          <MessageInput />
        </>
      }
    </div>
  );
}
