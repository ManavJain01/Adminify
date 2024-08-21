// Importing React Icons
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="bg-[url('https://png.pngtree.com/background/20230610/original/pngtree-several-large-skyscrapers-reflect-in-the-glass-picture-image_3054160.jpg')] bg-cover w-lvw min-h-lvh">
      <div className="text-black flex flex-col gap-10 items-center justify-center h-lvh w-lvw px-10 md:px-32 lg:px-64 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl">Contact Us</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis blanditiis dolorum tempore est adipisci, dignissimos eum omnis corrupti reiciendis. A amet quo nobis quisquam, aspernatur eos porro accusamus aliquid sequi.</p>
        </div>

        <div className="flex gap-10 justify-between w-full">
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <section className="bg-white flex items-center justify-center w-[50px] h-[48px] rounded-full">
                <FaLocationDot className="size-6" />
              </section>
              <section>
                <p className="font-semibold text-sky-600">Address</p>
                <p>Address with city and pincode</p>
              </section>
            </div>
            <div className="flex gap-5 items-center">
            <section className="bg-white flex items-center justify-center w-[50px] h-[48px] rounded-full">
              <FaPhoneAlt className="size-6" />
            </section>
            <section>
                <p className="font-semibold text-sky-600">Phone</p>
                <p>Phone number</p>
              </section>
            </div>
            <div className="flex gap-5 items-center">
              <section className="bg-white flex items-center justify-center w-[50px] h-[48px] rounded-full">
                <MdOutlineEmail className="size-6" />
              </section>
              <section>
                <p className="font-semibold text-sky-600">Email</p>
                <p>Company Email Address</p>
              </section>
            </div>
          </div>
          
          <form className="bg-white flex flex-col gap-10 h-[21rem] w-[28rem] py-2 px-5 rounded-lg">
            <p className="font-semibold text-3xl">Send Message</p>
            <section className="relative">
              <label htmlFor="name" className="absolute duration-700">Full Name</label>
              <input type="text" name="name" id="name" className="w-full border-b-2 border-black" />
            </section>

            <section className="relative">
              <label htmlFor="email" className="absolute duration-700">Email</label>
              <input type="text" name="email" id="email" className="w-full border-b-2 border-black" />
            </section>

            <section className="relative">
              <label htmlFor="message" className="absolute duration-700">Type your Message...</label>
              <input type="text" name="message" id="message" className="w-full border-b-2 border-black" />
            </section>

            <button className="text-xl text-white bg-sky-600 mr-auto px-5 py-1 rounded-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}