// Importing react icons
import { SlUserFemale } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

// Importing Zustand
import useConversation from '../../../../zustand/useConversation'

// Importing Socket io
import { useSocketContext } from "../../../../context/SocketContext";

export default function Conversation({profile="🙂", conversation, emoji='👋', lastIdx}) {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers?.includes(conversation._id);
  
  return (
    <>
      <div onClick={() => setSelectedConversation(conversation)} className={`${isSelected ? "bg-sky-500" : ""} flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}>
        <div className="avatar online">
          <div className="relative w-12 rounded-full">
            {isOnline && <span className="absolute right-0 top-0 w-2 h-2 bg-green-600 rounded-full" />}
            {conversation.profile_img
              ?<img src={conversation.profile_img} alt="profile_pic" className="size-12 rounded-full" />
              :<FaRegUser className="text-4xl my-1" />
            }
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.name}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <hr className="border-gray-700" />}
    </>
  );
}
