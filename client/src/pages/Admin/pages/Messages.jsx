// Importing React Icons
import { FaSearch } from "react-icons/fa";

// Importing local files
import Conversations from "./Messages/Conversations";
import MessageContainer from './Messages/MessageContainer'

export default function Messages() {
  return (
    <div className="bg-blue-950 flex h-[40rem] w-full pl-8 pb-5 rounded-xl shadow-xl">
      <nav className="flex flex-col gap-3 py-5 pr-3 border-r-[1px] border-gray-700">
        <section className="flex gap-3 items-center">
          <input type="text" name="users" id="users" placeholder="Search..." className="bg-black text-white px-5 py-2 rounded-xl outline-none" />
          <FaSearch className="size-8" />
        </section>

        <hr className="border-gray-700"/>

        <Conversations />
      </nav>

      <MessageContainer />
    </div>
  )
}