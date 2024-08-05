import { FaPlus } from "react-icons/fa";

// Importing Local Files
import TiltCard from "../components/TiltCard"

export default function Subscriptions() {
  const subs = [
    {
      name: "Basic",
      fees: "Rs.1,999",
      duration: "per month",
      subscription: "1 Month Subscription",
      features: ["upto 2 Hours Daily"],
      more: "Learn More"
    },
    {
      name: "Professional",
      fees: "Rs.1,499",
      duration: "per month",
      subscription: "3 Month Subscription",
      features: ["upto 4 Hours Daily", "Access to Spa"],
      more: "Learn More"
    },
    {
      name: "Ninja",
      fees: "Rs.999",
      duration: "per month",
      subscription: "6 Month Subscription",
      features: ["6+ Hours Daily", "Access to Spa", "A Personal Locker"],
      more: "Learn More"
    }
  ]

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-4xl">Become a Subscriber</h1>
        <span>Subscribe to get the Best features for your own benefits</span>
      </div>

      <div className="flex gap-4 flex-wrap">
        {subs.map((e,i) => {
          return(
            <TiltCard key={i} data={e} />
          )
        })}

        <button className="bg-gradient-to-br from-blue-500 to-pink-500 flex justify-center items-center h-[35rem] w-[20rem] rounded-xl shadow-lg">
          <FaPlus className="text-4xl" />
        </button>
      </div>

      <div>
        <span>Re-Subscribe 15 Days before your subscription runs out to add 2 more days per month.</span>
      </div>
    </div>
  )
}