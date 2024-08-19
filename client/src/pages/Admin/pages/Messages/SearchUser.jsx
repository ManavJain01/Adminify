// Importing React Icons
import { FaSearch } from "react-icons/fa";

// Importing React Packages
import { useState } from "react";

// Importing Custom Hooks
import { useChat } from '../../../../hooks/useChat'
import useConversation from '../../../../zustand/useConversation'

export default function SearchUser() {
  // useState
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  
  // Custom Hooks
  const { getConversations } = useChat();

  // Zustand
  const { setSelectedConversation } = useConversation();

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!search) return;
    if(search.length < 3) setError("Search term must be at least 3 characters long");

    const users = await getConversations();

    const user = users.find((u) => u.name.toLowerCase().includes(search.toLowerCase()));

    if(user){
      setSelectedConversation(user);
      setSearch("");
    }else{
      setError("No such user found!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-center">
      <input
        type="text"
        name="users"
        id="users"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-slate-500 text-white px-5 py-2 rounded-xl outline-none"
      />
      <button>
        <FaSearch className="size-8 text-slate-500" />
      </button>
    </form>
  );
}
