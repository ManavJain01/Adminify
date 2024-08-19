// Importing react icons
import { TiMessages } from "react-icons/ti";

// Importing React Packages
import { useSelector } from "react-redux";

export default function NoChatSelected() {
  // useSelector
  const user = useSelector((state) => state.user.data);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="font-semibold text-center sm:text-lg md:text-xl text-gray-200 flex flex-col items-center gap-2 px-4">
        <p>Welcome 👋 {user.name} ❄️</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  )
}