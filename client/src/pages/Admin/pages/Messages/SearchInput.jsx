// Importing React Icons
import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <section className="flex gap-3 items-center">
      <input
        type="text"
        name="users"
        id="users"
        placeholder="Search..."
        className="bg-slate-500 text-white px-5 py-2 rounded-xl outline-none"
      />
      <button>
        <FaSearch className="size-8 text-slate-500" />
      </button>
    </section>
  );
}
