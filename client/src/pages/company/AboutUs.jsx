export default function AboutUs() {
  return (
    <div className="bg-gray-100 flex flex-col items-center gap-20 w-lvw min-h-lvh px-10 md:px-28 lg:px-40 py-5">
      <h1 className="font-bold text-6xl text-orange-500">About Us</h1>

      <div className="flex gap-10 justify-between w-full">
        <div className="flex flex-col gap-5">
          <p className="font-semibold text-4xl">Welcome To Our Website</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, commodi dolore temporibus eligendi vitae praesentium ipsam quos soluta quam quaerat? Delectus eveniet quos tenetur saepe, id odio sed nulla deleniti.</p>
          <button className="text-2xl text-white bg-orange-500 mr-auto px-5 py-2 rounded-lg">Learn More</button>
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEeBhXwC57F1nxQQqJdKUyXfpSdKkKtNKcw&s" alt="image" className="w-[25rem] h-[25rem] rounded-lg" />
      </div>
    </div>
  )
}