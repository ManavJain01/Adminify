// Importing react Icons
import { FaBookDead } from "react-icons/fa";

// importing React Packages
import { useState, useEffect } from "react";

// Importing Custom Hooks
import { useReport } from '../../../../hooks/useReport'

// Importing local files
import { extractTime } from "../../../../utils/extractTime";

export default function UserLogin() {
  // Custom Hooks
  const {  } = useReport();

  // useState
  const [errors, setErrors] = useState([]);
  
  // useEffect
  useEffect(() => {
    const fetchErrors = async () => {
      // const res = await ;
    }

    fetchErrors();
  }, [])

  return (
    <div className="flex flex-col gap-5">
      <h1 className="tracking-wide font-semibold text-3xl">User Error Logs</h1>
      <hr className="border-gray-600" />
      <div className="flex flex-col gap-2 pb-5">
        {errors.length === 0
          ?<div className="text-5xl text-red-600 flex flex-col items-center justify-center gap-10 mt-20">
            <span>No Repords Found</span>
            <FaBookDead className="size-40" />
          </div>
          :<div></div>
        }
      </div>
    </div>
  )
}