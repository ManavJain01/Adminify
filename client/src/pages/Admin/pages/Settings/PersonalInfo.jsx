// Importing React Packages
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PersonalInfo() {
  // useSelector
  const user = useSelector(state => state.user.data);

  // useState
  const [userData, setUserData] = useState(user || {});

  return (
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
            value={userData?.name || ""}
            onChange={(e) => setUserData((restData) => ({...restData, name: e.target.value }))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="birthday" className="cursor-pointer">
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            value={userData?.birthday || ""}
            onChange={(e) => setUserData((restData) => ({...restData, birthday: e.target.value }))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="gender" className="cursor-pointer">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            value={userData?.gender || ""}
            onChange={(e) => setUserData((restData) => ({...restData, gender: e.target.value }))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="email" className="cursor-pointer">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            value={userData?.email || ""}
            onChange={(e) => setUserData((restData) => ({...restData, email: e.target.value }))}
            className="text-white bg-transparent border-b-2 border-green-700 outline-none"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="password" className="cursor-pointer">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            value={userData?.password || ""}
            onChange={(e) => setUserData((restData) => ({...restData, password: e.target.value }))}
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