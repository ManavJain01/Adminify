export default function PaymentInfo() {
  return (
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
  )
}