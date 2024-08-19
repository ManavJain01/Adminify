// Importing React Icons
import { RiLoader4Fill } from "react-icons/ri";

// Importing React Packages
import { useEffect, useState } from "react";

// Importing local files
import Conversation from "./Conversation";
import { getRandomEmoji } from '../../../../utils/emojis'
import { getRandomProfile } from '../../../../utils/profiles'

// Importing Custom Hooks
import { useChat } from "../../../../hooks/useChat";

export default function Conversations() {
  // Custom Hooks
  const { loading, getConversations } = useChat();
  
  // useState
  const [conversations, setConversations] = useState([]);

  // useEffect
  useEffect(() => {
    const Conversations = async () => {
      const res = await getConversations();
      setConversations(res);   
    }
    Conversations();
  }, [])

  return (
    <div className="custom-scrollbar2 pb-2 flex flex-col overflow-auto">
      {conversations.length === 0
        ?<span className="text-2xl text-center mt-[30%] opacity-50">No User Found!!!</span>
        :loading
          ?<RiLoader4Fill className="mx-auto size-10 animate-spin" />
          :conversations.map((e, i) => {
            return(
              <Conversation key={i} profile={getRandomProfile()} conversation={e} emoji={getRandomEmoji()} lastIdx={i === conversations.length - 1} />
            )
          })
      }
    </div>
  );
}
