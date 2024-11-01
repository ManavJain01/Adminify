// Importing React Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

// Importing React Package
import { useNavigate } from "react-router-dom";

// Importing local files
import { useUser } from "../../../hooks/useUser";

export default function Prices({plans = []}) {
  // useNavigate
  const navigate = useNavigate();

  // Custom Hooks
  const { isLogin } = useUser();

  // Functions
  const handleClick = async (e) => {
    if(isLogin){
      navigate("/pricing_payment", {
        state: {
          price: e
        }
      });
    } else navigate("/login");
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 justify-center">
      {plans.map((e, i) => {
        return(
          <div key={i} className={`${i+1 === plans.length && "text-black bg-white"} flex flex-col gap-12 md:max-w-[25rem] h-[35rem] p-5 border border-gray-600 rounded-xl`}>
            <p className={`${i+1 === plans.length ? "bg-gray-300" : "bg-gray-600"} rounded-xl w-fit py-1 px-3`}>{e?.tag}</p>

            <section className="flex flex-col gap-5">
              <p className="font-semibold text-3xl">{e?.headline}</p>
              <p className="text-gray-400">{e?.description}</p>
              <button onClick={() => handleClick(e)} className="group text-white bg-blue-700 hover:bg-blue-800 flex items-center justify-center gap-5 py-2 rounded-full duration-500">
                <span className="group-hover:hidden font-semibold">{e?.price}</span>
                <span className="hidden group-hover:block font-semibold">Purchase</span>
                <FaArrowRightLong className="size-3 group-hover:size-4" />
              </button>
            </section>

            <div className="flex flex-col gap-2">
              {e?.benefits?.map((f, j ) =>
                <div key={j} className="flex items-center gap-3">
                  <FaCheckCircle />
                  <p className={`border-b-2 border-dotted ${i+1 === plans.length && "border-black"}`}>{f}</p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}