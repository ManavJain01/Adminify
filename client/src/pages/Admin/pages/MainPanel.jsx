<<<<<<< HEAD
// Importing React Icons
import { AiOutlineProduct } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";

=======
>>>>>>> 3187acf488c0f3bbabb0f6791299e75acfed87b0
// Importing React Packages
import { Link } from 'react-router-dom'

// Importing local files
import Conversations from './Messages/Conversations'
<<<<<<< HEAD
import ShowCustomers from './Customers/ShowCustomers'
=======
>>>>>>> 3187acf488c0f3bbabb0f6791299e75acfed87b0

export default function MainPanel() {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      {/* Customers */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-end gap-5">
          {/* Customers and Subscriptions */}
          <Link to="/admin/customers" className="text-center bg-blue-950 w-[35rem] h-[30rem] px-8 py-5 rounded-xl">
            <span>Customers</span>
            <ShowCustomers flag={false} />
          </Link>
          <Link to="/admin/subscription" className="text-center bg-blue-950 flex justify-center items-center w-[17rem] h-[20rem] px-8 py-5 rounded-xl">
            <MdSubscriptions className="size-20" />
          </Link>
        </div>

        {/* Products */}
        <Link to="/admin/products" className="text-center bg-blue-950 flex justify-center items-center w-[35rem] h-[30rem] px-8 py-5 rounded-xl">
          <AiOutlineProduct className="size-20" />
        </Link>
      </div>

      {/* Reports, Broadcast and Messages */}
      <div className="flex flex-col gap-5">
        <Link to="/admin/reports" className="text-center bg-blue-950 flex justify-center items-center w-[20rem] h-[20rem] px-8 py-5 rounded-xl">
          <TbReportSearch className="size-20" />
        </Link>
        <Link to="/admin/broadcast" className="text-center bg-blue-950 flex justify-center items-center w-[20rem] h-[8rem] px-8 py-5 rounded-xl">
          <FaTowerBroadcast className="size-20" />
        </Link>
        <Link to="/admin/messages" className="text-center bg-blue-950 flex flex-col gap-3 w-[20rem] h-[20rem] px-8 py-5 rounded-xl">
          <span>Messages</span>
          <Conversations />
        </Link>
        {/* Settings */}
        <Link to="/admin/settings" className="text-center bg-blue-950 flex justify-center items-center w-[20rem] h-[9rem] px-8 py-5 rounded-xl">
          <CiSettings className="size-20" />
        </Link>
      </div>
    
    </div>
  )
}