import { CiImport } from "react-icons/ci";

// Importing React Packages
import { useEffect } from "react"
import { Link } from 'react-router-dom'

import './Main.css'

export default function Main() {
  // useEffect
  useEffect(() => {
    let cards = document.getElementById('card');
    cards.onmousemove = function(e){
      let x = e.pageX - cards.offsetLeft;
      let y = e.pageY - cards.offsetTop;

      cards.style.setProperty('--x', x+'px');
      cards.style.setProperty('--y', y+'px');
    }
  }, [])

  // Functions

  return (
    <div className="text-lg text-white bg-[#222] flex justify-center items-center w-lvw h-lvh p-5">
      <div
        id="card"
        className="relative bg-[#2d2d2d] w-[30rem] h-[30rem] p-8 rounded-lg shadow-lg
          before:absolute before:top-[--y] before:left-[--x] before:content-[''] before:opacity-0 hover:before:opacity-100 before:rounded-full
          overflow-hidden"
        >
          <div className="z-20 relative font-bold text-xl text-black flex flex-col gap-10 w-full h-full rounded-full">
            <section className="relative">
              <input type="text" name="companyName" id="companyName" className="peer w-full px-5 py-2 rounded-full outline-none" />
              <label htmlFor="companyName" className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full duration-700">Company Name</label>
            </section>

            <section className="relative">
              <input type="text" name="ownerName" id="ownerName" className="peer w-full px-5 py-2 rounded-full outline-none" />
              <label htmlFor="ownerName" className="absolute top-2 left-5 peer-focus:-top-4 peer-focus:left-4 peer-focus:backdrop-blur-sm peer-focus:rounded-full duration-700">Owner Name</label>
            </section>

            <section className="relative mx-auto">
              <input
                type="file"
                name="logo"
                id="logo"
                className="hidden" />
              <label htmlFor="logo" className="flex gap-5 items-center bg-white w-full px-8 py-2 rounded-md cursor-pointer">
                <span>Import Your Logo</span>
                <CiImport className="size-8" />
              </label>
            </section>

            <Link to='/login' className="text-white bg-green-600 w-fit ml-auto mt-auto px-5 py-2 rounded-lg">Next</Link>
          </div>
        </div>
    </div>
  )
}