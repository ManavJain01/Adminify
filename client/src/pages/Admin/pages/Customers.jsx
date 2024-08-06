export default function Customers() {
  return (
    <div className="bg-blue-950 h-full w-full px-8 py-5 rounded-xl shadow-xl">
      <h1 className="font-bold text-3xl tracking-widest">All Customers</h1>

      <table className="mt-10">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/4 text-left text-white">User</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Email Id</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Joined Date</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Priviledge</th>
            <th className="px-4 py-2 w-auto text-left text-white">Payment</th>
          </tr>
        </thead>

        <tbody>
          {/* Sample rows */}
          <tr>
            <td className="px-4 py-2 text-white">John Doe</td>
            <td className="px-4 py-2 text-white">John@gmail.com</td>
            <td className="px-4 py-2 text-white">2023-01-01</td>
            <td className="px-4 py-2 text-white">Admin</td>
            <td className="px-4 py-2 text-white">$100</td>
          </tr>
          <tr>
            <td className="px-4 py-2 text-white">Jane Smith</td>
            <td className="px-4 py-2 text-white">Jane@gmail.com</td>
            <td className="px-4 py-2 text-white">2023-02-01</td>
            <td className="px-4 py-2 text-white">User</td>
            <td className="px-4 py-2 text-white">$200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}