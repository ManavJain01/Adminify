// Importing React Icons
import { CiUser } from "react-icons/ci";
import { FaCreditCard } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

// Importing React Packages
import { useState } from "react";

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
          <div className="flex flex-col gap-8">
            <span className="text-3xl">Personal Info</span>

            <form className="text-black flex flex-col gap-5">
              <section className="flex flex-col">
                <label htmlFor="name" className="cursor-pointer">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-transparent border-b-2 border-green-700 outline-none"
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="birthday" className="cursor-pointer">
                  Birthday
                </label>
                <input
                  type="text"
                  id="birthday"
                  className="bg-transparent border-b-2 border-green-700 outline-none"
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="gender" className="cursor-pointer">
                  Gender
                </label>
                <input
                  type="text"
                  id="gender"
                  className="bg-transparent border-b-2 border-green-700 outline-none"
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="email" className="cursor-pointer">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-transparent border-b-2 border-green-700 outline-none"
                />
              </section>

              <section className="flex flex-col">
                <label htmlFor="password" className="cursor-pointer">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-transparent border-b-2 border-green-700 outline-none"
                />
              </section>

              <button className="text-white bg-green-700 w-fit px-5 py-2 rounded-lg">
                Update
              </button>
            </form>
          </div>
        )) ||
          (option === "card" && (
            <div className="flex flex-col gap-8">
              <span className="text-3xl">Payment Info</span>

              <form className="text-black flex flex-col gap-5">
                <section className="flex flex-col">
                  <label htmlFor="method" className="cursor-pointer">
                    Payment Method
                  </label>
                  <input
                    type="text"
                    id="method"
                    placeholder="MasterCard - 0202 **** **** 7336"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="address" className="cursor-pointer">
                    Billing Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="zipcode" className="cursor-pointer">
                    ZIP CODE
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="date" className="cursor-pointer">
                    Billing Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="redeem" className="cursor-pointer">
                    Redeem Card
                  </label>
                  <input
                    type="password"
                    id="redeem"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <button className="text-white bg-green-700 w-fit px-5 py-2 rounded-lg">
                  Update
                </button>
              </form>
            </div>
          )) ||
          (option === "subscription" && (
            <div className="flex flex-col gap-8">
              <span className="text-3xl">Subscription Info</span>

              <form className="text-black flex flex-col gap-5">
                <section className="flex flex-col">
                  <label htmlFor="date" className="cursor-pointer">
                    Payment Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    placeholder="MasterCard - 0202 **** **** 7336"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="charges" className="cursor-pointer">
                    Next Charges
                  </label>
                  <input
                    type="text"
                    id="charges"
                    placeholder="$80.56 includes tax"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="plan" className="cursor-pointer">
                    PLAN
                  </label>
                  <input
                    type="text"
                    id="plan"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="monthly" className="cursor-pointer">
                    Monthly
                  </label>
                  <input
                    type="text"
                    id="monthly"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <button className="text-white bg-green-700 w-fit px-5 py-2 rounded-lg">
                  Update
                </button>
              </form>
            </div>
          )) ||
          (option === "privacy" && (
            <div className="flex flex-col gap-8">
              <span className="text-3xl">Privacy Settings</span>

              <form className="text-black flex flex-col gap-5">
                <section className="flex flex-col">
                  <label htmlFor="notification" className="cursor-pointer">
                    Manage Email Noti.
                  </label>
                  <input
                    type="email"
                    id="notification"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="privacy" className="cursor-pointer">
                    Manage Privacy Settings
                  </label>
                  <input
                    type="text"
                    id="privacy"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="terms" className="cursor-pointer">
                    View TERMS of USE
                  </label>
                  <input
                    type="text"
                    id="terms"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="ad" className="cursor-pointer">
                    PERSONALIZED AD EXPERIENCE
                  </label>
                  <input
                    type="text"
                    id="ad"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="protect" className="cursor-pointer">
                    PROTECT ACCOUNT
                  </label>
                  <input
                    type="text"
                    id="protect"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <button className="text-white bg-green-700 w-fit px-5 py-2 rounded-lg">
                  Update
                </button>
              </form>
            </div>
          )) ||
          (option === "settings" && (
            <div className="flex flex-col gap-8">
              <span className="text-3xl">Account Settings</span>

              <form className="text-black flex flex-col gap-5">
                <section className="flex flex-col">
                  <label htmlFor="sync" className="cursor-pointer">
                    SYNC WATCHLIST
                  </label>
                  <input
                    type="text"
                    id="sync"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="hold" className="cursor-pointer">
                    HOLD SUBSCRIPTION
                  </label>
                  <input
                    type="text"
                    id="hold"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="cancel" className="cursor-pointer">
                    CANCEL SUBSCRIPTION
                  </label>
                  <input
                    type="text"
                    id="cancel"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="devices" className="cursor-pointer">
                    Your Devices
                  </label>
                  <input
                    type="text"
                    id="devices"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <section className="flex flex-col">
                  <label htmlFor="referrals" className="cursor-pointer">
                    REFERRALS
                  </label>
                  <input
                    type="text"
                    id="referrals"
                    className="bg-transparent border-b-2 border-green-700 outline-none"
                  />
                </section>

                <button className="text-white bg-green-700 w-fit px-5 py-2 rounded-lg">
                  Update
                </button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}
