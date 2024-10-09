import { FaCheckCircle } from "react-icons/fa";

// Importing React Packages
import { useEffect, useState, Fragment } from "react"

export default function PricesComparison({plans = []}) {
  // useState
  const [benefits, setBenefits] = useState([]);

  // useEffect
  useEffect(() => {
    const benefitsArray = plans.flatMap(plan => 
      plan?.benefits?.map(e => ({
        plan: plan?.headline,
        benefits: e,
      })) || []
    );

    setBenefits(benefitsArray);
  }, []);
  
  return (
    <div className="custom-scrollbar relative flex flex-col gap-40 h-[45rem] px-20 overflow-y-scroll">
      <div className="z-10 sticky top-0 left-0 bg-black flex justify-between">
        <h1 className="text-3xl">Compare features and add-ons</h1>

        {plans.map((e, i) => {
          return (
            <div key={i} className={`${i+1 === plans.length && "text-black bg-white rounded-xl"} flex flex-col items-center gap-5 px-16 py-5`}>
              <p className="font-semibold text-xl">{e?.headline}</p>
              <button className="group text-white bg-blue-700 w-40 px-10 py-2 rounded-full">
                <span className="group-hover:hidden">{e?.price}</span>
                <span className="hidden group-hover:block">Purchase</span>
              </button>
            </div>
          )
        })}
      </div>

      <div className="flex flex-col gap-5 border-l-4 border-blue-300">
        {benefits?.map((e, i) => {
          return(
            <Fragment key={i}>
              <div key={i} className="flex justify-between">
                <p className="w-[30rem] pl-8">
                  <span className="border-b-2 border-dotted">{e?.benefits}</span>
                </p>
                
                <div className="relative right-20 w-[15rem] flex items-center justify-center">{e?.plan === "Launch" && <FaCheckCircle />}</div>
                <div className="relative right-16 w-[15rem] flex items-center justify-center">{e?.plan !== "Enterprise" && <FaCheckCircle />}</div>
                <div className="relative right-10 w-[15rem] flex items-center justify-center"><FaCheckCircle /></div>
              </div>

              <hr className={`${i === benefits.length-1 ? "border-none" : "border-blue-300"}`} />
            </Fragment>
          )
        })}
      </div>
    </div>
  )
}