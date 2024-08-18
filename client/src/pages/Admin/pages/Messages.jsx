// Importing local files
import Conversations from "./Messages/Conversations";
import MessageContainer from "./Messages/MessageContainer";
import SearchInput from "./Messages/SearchInput";

export default function Messages() {
  return (
    <div className="bg-blue-950 flex h-[40rem] w-full pl-8 pb-5 rounded-xl shadow-xl">
      <nav className="flex flex-col gap-3 py-5 pr-3 border-r-[1px] border-gray-700">
        <SearchInput />
        <hr className="border-gray-700" />
        <Conversations />
      </nav>

      <MessageContainer />
    </div>
  );
}
