// Importing React Packages
import { Link } from 'react-router-dom'

export default function MainPanel() {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      {/* Customers */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-end gap-5">
          {/* Customers and Subscriptions */}
          <Link to="/admin/customers" className="text-center bg-blue-950 w-[35rem] h-[30rem] px-8 py-5 rounded-xl">Customers</Link>
          <Link to="/admin/subscription" className="text-center bg-blue-950 w-[17rem] h-[20rem] px-8 py-5 rounded-xl">Subscriptions</Link>
        </div>

        {/* Products */}
        <Link to="/admin/products" className="text-center bg-blue-950 w-[35rem] h-[30rem] px-8 py-5 rounded-xl">Products</Link>
      </div>

      {/* Reports, Broadcast and Messages */}
      <div className="flex flex-col gap-5">
        <Link to="/admin/reports" className="text-center bg-blue-950 w-[20rem] h-[20rem] px-8 py-5 rounded-xl">Reports</Link>
        <Link to="/admin/broadcast" className="text-center bg-blue-950 w-[20rem] h-[8rem] px-8 py-5 rounded-xl">Broadcast</Link>
        <Link to="/admin/messages" className="text-center bg-blue-950 w-[20rem] h-[20rem] px-8 py-5 rounded-xl">Messages</Link>
        {/* Settings */}
        <Link to="/admin/settings" className="text-center bg-blue-950 w-[20rem] h-[9rem] px-8 py-5 rounded-xl">Settings</Link>
      </div>
    
    </div>
  )
}