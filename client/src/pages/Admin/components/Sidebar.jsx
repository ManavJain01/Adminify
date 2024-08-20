// Importing React Icons
import { HiMenuAlt3 } from "react-icons/hi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
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
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";
import { useChat } from "../../../hooks/useChat";

export default function Sidebar() {
  // Custom Hookes
  const { logout: logoutService } = useUser();
  const { getConversations } = useChat();

  // useState
  const [totalMessages, setTotalMessages] = useState([]);
  const [showMenu, setShowMenu] = useState(true);

    // useEffect
    useEffect(() => {
      const Conversations = async () => {
        const res = await getConversations();
        setTotalMessages(res);  
      }

      Conversations();
    }, [])

  const sidebar = [
    {
      name: "Dashboard",
      component: <PiHouseLight className="size-8" />,
      link: "/admin",
    },
    {
      name: "Users",
      component: <MdPeopleAlt className="size-8" />,
      link: "/admin/customers",
    },
    {
      name: "Messages",
      component: <LuMessagesSquare className="size-8" />,
      count: totalMessages.length,
      link: "/admin/messages",
    },
    {
      name: "Products",
      component: <AiOutlineProduct className="size-8" />,
      link: "/admin/products",
    },
    {
      name: "Subscriptions",
      component: <MdSubscriptions className="size-8" />,
      link: "/admin/subscription",
    },
    {
      name: "Reports",
      component: <TbReportSearch className="size-8" />,
      link: "/admin/reports",
    },
    {
      name: "Settings",
      component: <CiSettings className="size-8" />,
      link: "/admin/settings",
    },
  ];

  return (
    <nav className={`flex flex-col ${showMenu ? "border-r-2 border-blue-950" : ""}`}>
      <span className={`${showMenu ? "bg-blue-950" : ""} flex justify-end px-5 py-2`}><button onClick={() => setShowMenu(!showMenu)}>
        {showMenu
          ?<HiMenuAlt3 className="size-8" />
          :<HiOutlineMenuAlt2 className="size-8" />
        }
      </button></span>
      
      <div className={`${showMenu ? "w-[15rem]" : "hidden"} flex flex-col`}>
        <ul className="flex flex-col">
          {sidebar.map((e, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={e?.link}
                  end
                  className="relative flex gap-3 items-center p-5 hover:bg-blue-900 aria-[current=page]:bg-blue-950 aria-[current=page]:text-green-700"
                >
                  {e?.component}
                  <span>{e.name}</span>
                  {e.count && (
                    <span className="absolute right-16 top-[27px] text-xs text-white bg-green-800 flex justify-center items-center h-[18px] w-[16px] rounded-lg">
                      {e?.count}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => logoutService()}
          className="flex gap-3 items-center p-5 hover:bg-red-950 hover:text-orange-600"
        >
          <IoLogOutOutline className="size-8" />
          <span>logout</span>
        </button>
      </div>
    </nav>
  );
}
