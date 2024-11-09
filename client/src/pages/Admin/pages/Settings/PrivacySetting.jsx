// Importing React Packages
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PrivacySetting() {
  // useSelector
  const user = useSelector(state => state.user.data);

  // useState
  const [userData, setUserData] = useState(user || {});
  
  return (
    <div className="flex flex-col gap-8">
      <span className="text-3xl">Privacy Settings</span>

      <form className="text-black flex flex-col gap-5">
        <section className="flex flex-col">
          <label htmlFor="privacy-notification" className="cursor-pointer">
            Manage Email Noti.
          </label>
          <input
            type="email"
            id="privacy-notification"
            value={userData?.email || ""}
            onChange={(e) => setUserData((restData) => ({...restData, email: e.target.value} ))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="privacy-privacy" className="cursor-pointer">
            Manage Privacy Settings
          </label>
          <input
            type="text"
            id="privacy-privacy"
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="privacy-terms" className="cursor-pointer">
            View TERMS of USE
          </label>
          <input
            type="text"
            id="privacy-terms"
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="privacy-ad" className="cursor-pointer">
            PERSONALIZED AD EXPERIENCE
          </label>
          <input
            type="text"
            id="privacy-ad"
            value={userData?.email || ""}
            onChange={(e) => setUserData((restData) => ({...restData, email: e.target.value} ))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="privacy-protect" className="cursor-pointer">
            PROTECT ACCOUNT
          </label>
          <input
            type="text"
            id="privacy-protect"
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