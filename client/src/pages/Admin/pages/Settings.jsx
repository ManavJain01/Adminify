// Importing React Icons
import { CiUser } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

// Importing React Packages
import { useState } from "react";

// Importing Local Files
import PersonalInfo from "./Settings/PersonalInfo";
import PaymentInfo from "./Settings/PaymentInfo";
import SubscriptionInfo from "./Settings/SubscriptionInfo"
import PrivacySetting from "./Settings/PrivacySetting"
import AccountSetting from "./Settings/AccountSetting"

export default function Settings() {
  const navbar = [
    {
      component: <CiUser className="size-8" />,
      option: "personal",
    },
    {
      component: <FaCreditCard className="size-8" />,
      option: "card",
    },
    {
      component: <MdOutlineComputer className="size-8" />,
      option: "subscription",
    },
    {
      component: <MdOutlinePrivacyTip className="size-8" />,
      option: "privacy",
    },
    {
      component: <CiSettings className="size-8" />,
      option: "settings",
    },
  ];

  const [option, setOption] = useState("personal");

  return (
    <div className="flex flex-col items-center">
      <nav className="z-20 bg-blue-950 w-full h-[7rem] p-8 border-2 border-black">
        <ul className="flex gap-10 justify-around">
          {navbar.map((e, i) => {
            return (
              <li key={i} className="flex items-center">
                <button
                  onClick={() => setOption(e?.option)}
                  className={`${option === e.option && "text-black"}`}
                >
                  {e.component}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="z-10 relative -top-32 bg-blue-900 w-[90%] min-h-[40rem] pt-36 pb-5 px-10">
        {(option === "personal" && (
          <PersonalInfo />
        )) ||
          (option === "card" && (
            <PaymentInfo />
          )) ||
          (option === "subscription" && (
            <SubscriptionInfo />
          )) ||
          (option === "privacy" && (
            <PrivacySetting />
          )) ||
          (option === "settings" && (
            <AccountSetting />
          ))}
      </div>
    </div>
  );
}
