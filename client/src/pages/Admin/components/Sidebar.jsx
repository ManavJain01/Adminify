// Importing React Icons
import { PiHouseLight } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdSubscriptions } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

// Importing React Packages
import { NavLink } from "react-router-dom"

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function Sidebar() {
  // Custom Hookes
  const { logout : logoutService } = useUser();

  const sidebar = [
    {
      name: 'Dashboard',
      component: <PiHouseLight className="size-8" />,
      link: '/admin'
    },
    {
      name: 'Customers',
      component: <MdPeopleAlt className="size-8" />,
      link: '/admin/customers'
    },
    {
      name: 'Messages',
      component: <LuMessagesSquare className="size-8" />,
      count: "0",
      link: '/admin/messages'
    },
    {
      name: 'Products',
      component: <AiOutlineProduct className="size-8" />,
      link: '/admin/products'
    },
    {
      name: 'Subscriptions',
      component: <MdSubscriptions className="size-8" />,
      link: '/admin/subscription'
    },
    {
      name: 'Broadcast',
      component: <FaTowerBroadcast className="size-8" />,
      link: '/admin/broadcast'
    },
    {
      name: 'Reports',
      component: <TbReportSearch className="size-8" />,
      link: '/admin/reports'
    },
    {
      name: 'Settings',
      component: <CiSettings className="size-8" />,
      link: '/admin/settings'
    },
  ]

  return (
    <nav className="flex flex-col w-[15rem] border-r-2 border-blue-950">
      <ul className="flex flex-col">
        {sidebar.map((e,i) => {
          return(
            <li key={i}><NavLink to={e?.link} end className="relative flex gap-3 items-center p-5 hover:bg-blue-900 aria-[current=page]:bg-blue-950 aria-[current=page]:text-green-700">
              {e?.component}
              <span>{e.name}</span>
              {e.count
                &&<span className="absolute right-16 top-[27px] text-xs text-white bg-green-800 flex justify-center items-center h-[18px] w-[16px] rounded-lg">{e?.count}</span>
              }
            </NavLink></li>
          )
        })}
      </ul>

      <button onClick={() => logoutService()} className="flex gap-3 items-center p-5 hover:bg-red-950 hover:text-orange-600">
        <IoLogOutOutline className="size-8" />
        <span>logout</span>
      </button>
    </nav>
  )
}