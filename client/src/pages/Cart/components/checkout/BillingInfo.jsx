// Importing React Icons
import { useState, useEffect } from "react";
import { SiTicktick } from "react-icons/si";

// Importing Redux Icons
import { useDispatch, useSelector } from "react-redux";
import { setPersonalDetails as setPersonalDetailsDispatch } from "../../../../Redux/features/CompanySlice";

export default function CheckoutForm({ save = 1, setSave }) {
  // useSelector
  const reduxData = useSelector(state => state.company.personalDetails);
// console.log(reduxData);

  // useDispatch
  const dispatch = useDispatch();

  // useState
  const [personalDetails, setPersonalDetails] = useState({});
  
  // useEffect
  useEffect(() => {
    setPersonalDetails(reduxData);
  }, [reduxData]);
  
  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, buildingNo, streetName, landmark, city, state } = personalDetails;

    const fullName = `${firstName || ''} ${lastName || ''}`.trim();

    const address = [
      buildingNo,
      streetName,
      landmark,
      city,
      state
    ].filter(Boolean).join(', ');

    const updatedPersonalDetails = {
      ...personalDetails,  // Spread the existing state
      fullName,            // Add the new fullName
      address              // Add the new address
    };

    dispatch(setPersonalDetailsDispatch(updatedPersonalDetails));
    
    setSave(2);
  };

  if(save === 1) return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-5 border border-gray-500 rounded-lg">
      <div>
        <p className="font-semibold text-xl">Billing Information</p>
        <p className="text-sm">All fields required unless otherwise stated.</p>
      </div>

      <div className="flex flex-wrap gap-5">
        <section className="relative flex-1">
          <label htmlFor="checkout-firstName" className="absolute text-xs top-1 left-3">First Name</label>
          <input type="text" id="checkout-firstName" value={personalDetails?.firstName || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, firstName: e.target?.value }})} className="bg-black border h-12 w-full px-3 pt-4 outline-none" />
        </section>

        <section className="relative flex-1">
          <label htmlFor="checkout-lastName" className="absolute text-xs top-1 left-3">Last Name</label>
          <input type="text" id="checkout-lastName" value={personalDetails?.lastName || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, lastName: e.target?.value }})} className="bg-black border w-full h-12 px-3 pt-4 outline-none" />
        </section>
      </div>

      <section className="relative">
        <input type="text" id="checkout-phone" value={personalDetails?.phone || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, phone: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
        <label htmlFor="checkout-phone" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.phone && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>Phone Number</label>
      </section>

      <section className="relative">
        <input type="text" id="checkout-building" value={personalDetails?.buildingNo || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, buildingNo: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
        <label htmlFor="checkout-building" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.buildingNo && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>Building / Society</label>
      </section>

      <section className="relative">
        <input type="text" id="checkout-street" value={personalDetails?.streetName || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, streetName: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
        <label htmlFor="checkout-street" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.streetName && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>Street Name</label>
      </section>

      <section className="relative">
        <input type="text" id="checkout-landmark" value={personalDetails?.landmark || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, landmark: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
        <label htmlFor="checkout-landmark" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.landmark && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>Landmark</label>
        <span className={`absolute top-1 left-[68px] text-black peer-focus:text-white text-xs duration-700 ${personalDetails?.landmark && "peer-valid:text-white"}`}>(Optional)</span>
      </section>

      <section className="relative">
        <input type="text" id="checkout-city" value={personalDetails?.city || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, city: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
        <label htmlFor="checkout-city" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.city && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>City</label>
      </section>

      <div className="flex flex-wrap gap-5">
        <section className="flex-1 relative">
          <input type="text" id="checkout-state" value={personalDetails?.state || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, state: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
          <label htmlFor="checkout-state" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.state && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>State</label>
        </section>

        <section className="flex-1 relative">
          <input type="text" id="checkout-postal" value={personalDetails?.postalCode || ""} onChange={(e) => setPersonalDetails((prevInput) => {return { ...prevInput, postalCode: e.target?.value }})} className="peer bg-black border h-12 w-full px-3 pt-4 outline-none" />
          <label htmlFor="checkout-postal" className={`absolute top-3 left-3 peer-focus:text-xs peer-focus:top-1 ${personalDetails?.postalCode && "peer-valid:text-xs peer-valid:top-1"} duration-700`}>Postal Code</label>
        </section>
      </div>

      <button className="font-bold text-black bg-white py-2">Save</button>
    </form>
  )
  else return (
    <div className="flex flex-col gap-3 p-5 border border-gray-500 rounded-lg">
      <p className="font-semibold text-xl flex justify-between gap-10">
        <span>Billing Information</span>
        <SiTicktick className="text-green-400" />
      </p>

      <div className="text-sm">
        <p className="flex justify-between gap-10">
          <span>{personalDetails?.fullName || "Name"}</span>
          <button className="underline" onClick={() => setSave(1)}>Edit</button>
        </p>
        <p>{personalDetails?.address || "Address"}</p>
      </div>
    </div>
  )
}