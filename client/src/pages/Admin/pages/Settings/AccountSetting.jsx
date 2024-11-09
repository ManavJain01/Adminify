export default function AccountSetting() {
  return (
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
  )
}