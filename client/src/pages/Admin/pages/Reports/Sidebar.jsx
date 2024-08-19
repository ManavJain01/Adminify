export default function Sidebar() {
  return (
    <nav className="tracking-wider font-semibold text-xl w-full">
      <ul className="flex flex-col">
        <li className="hover:bg-sky-500 px-5 py-2 rounded-md">User Logins</li>
        <li className="hover:bg-sky-500 px-5 py-2 rounded-md">Error Logs</li>
      </ul>
    </nav>
  )
}