// Importing React Packages
import { useState } from "react";
import { useSelector } from "react-redux";

export default function SubscriptionInfo() {
  // useSelector
  const user = useSelector(state => state.user.data);

  // useState
  const [userData, setUserData] = useState(user || {});
  
  return (
    <div className="flex flex-col gap-8">
      <span className="text-3xl">Subscription Info</span>

      <form className="text-black flex flex-col gap-5">
        <section className="flex flex-col">
          <label htmlFor="subscription-date" className="cursor-pointer">
            Payment Date
          </label>
          <input
            type="date"
            id="subscription-date"
            disabled
            value={userData?.subscription?.date || ""}
            onChange={(e) => setUserData((restData) => ({...restData, subscription: {...restData.subscription, date: e.target.value}} ))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="subscription-charges" className="cursor-pointer">
            Next Charges
          </label>
          <input
            type="text"
            id="subscription-charges"
            placeholder="$80.56 includes tax"
            disabled
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="subscription-plan" className="cursor-pointer">
            PLAN
          </label>
          <input
            type="text"
            id="subscription-plan"
            disabled
            value={userData?.subscription?.name || ""}
            onChange={(e) => setUserData((restData) => ({...restData, subscription: {...restData.subscription, name: e.target.value}} ))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="subscription-duration" className="cursor-pointer">
            Duration
          </label>
          <input
            type="text"
            id="subscription-duration"
            disabled
            value={userData?.subscription?.duration || ""}
            onChange={(e) => setUserData((restData) => ({...restData, subscription: {...restData.subscription, duration: e.target.value}} ))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <button className="text-white bg-green-700 w-fit px-5 py-2 rounded-lg">
          Update
        </button>
      </form>
    </div>
  )
}