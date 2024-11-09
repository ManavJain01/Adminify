// Importing React Icons
import { FaUsers } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

// Importing React Packages
import { Link } from "react-router-dom";

// Importing local files
import Conversations from "./Messages/Conversations";
import ShowCustomers from "./Customers/ShowCustomers";
import ReportSidebar from "./Reports/Sidebar";
import LockForNoAuthentication from "../components/LockForNoAuthentication";

export default function MainPanel() {
  return (
    <div className="flex flex-wrap justify-between gap-8">
      {/* Customers */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-end gap-5">
          {/* Customers and Subscriptions */}
          <Link
            to="/admin/customers"
            className="relative text-center bg-blue-950 w-[35rem] h-[30rem] px-8 py-5 rounded-xl"
          >
            <LockForNoAuthentication />
            <FaUsers className="mx-auto size-8" />
            <ShowCustomers flag={false} />
          </Link>
          <Link
            to="/admin/subscription"
            className="text-center bg-blue-950 flex justify-center items-center w-[17rem] h-[20rem] px-8 py-5 rounded-xl"
          >
            <MdSubscriptions className="size-20" />
          </Link>
        </div>

        {/* Products */}
        <Link
          to="/admin/products"
          className="text-center bg-blue-950 flex justify-center items-center w-[35rem] h-[30rem] px-8 py-5 rounded-xl"
        >
          <AiOutlineProduct className="size-20" />
        </Link>
      </div>

      {/* Reports, Broadcast and Messages */}
      <div className="flex flex-col gap-5">
        <Link
          to="/admin/reports"
          className="relative text-center bg-blue-950 flex flex-col items-center gap-5 w-[20rem] h-[20rem] px-8 py-5 rounded-xl"
        >
            <LockForNoAuthentication />
          <TbReportSearch className="size-8" />
          <ReportSidebar />
        </Link>
        <Link
          to="/admin/broadcast"
          className="text-center bg-blue-950 flex justify-center items-center w-[20rem] h-[8rem] px-8 py-5 rounded-xl"
        >
          <FaTowerBroadcast className="size-20" />
        </Link>
        <Link
          to="/admin/messages"
          className="text-center bg-blue-950 flex flex-col gap-3 w-[20rem] h-[20rem] px-8 py-5 rounded-xl"
        >
          <span><LuMessagesSquare className="mx-auto size-8" /></span>
          <Conversations />
        </Link>
        {/* Settings */}
        <Link
          to="/admin/settings"
          className="text-center bg-blue-950 flex justify-center items-center w-[20rem] h-[9rem] px-8 py-5 rounded-xl"
        >
          <CiSettings className="size-20" />
        </Link>
      </div>
    </div>
  );
}
