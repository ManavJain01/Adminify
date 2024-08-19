// Importing react Icons
import { FaBookDead } from "react-icons/fa";

// importing React Packages
import { useState, useEffect } from "react";

// Importing Custom Hooks
import { useReport } from '../../../../hooks/useReport'

// Importing local files
import { extractTime } from "../../../../utils/extractTime";
import ReportSkeleton from "./ReportSkeleton";

export default function UserLogin() {
  // Custom Hooks
  const { getUserLogins } = useReport();

  // useState
  const [userLogins, setUserLogins] = useState({});
  const [loading, setLoading] = useState(false);
  
  // useEffect
  useEffect(() => {
    const UserLogins = async () => {
      setLoading(true);
      const res = await getUserLogins();
      setLoading(false);
      if(res && res[0]?.user_logins[0]) setUserLogins(res[0]?.user_logins[0]);
    }

    UserLogins();
  }, [])

  return (
    <div className="flex flex-col gap-5">
      <h1 className="tracking-wide font-semibold text-3xl">User Logins</h1>
      <hr className="border-gray-600" />
      <div className="flex flex-col gap-2 pb-5">
        {loading && [...Array(4)].map((_, idx) => <ReportSkeleton key={idx} />)}
        {!loading && Object?.keys(userLogins).length === 0
          ?<div className="text-5xl text-red-600 flex flex-col items-center justify-center gap-10 mt-20">
            <span>No Repords Found</span>
            <FaBookDead className="size-40" />
          </div>
          :!loading && Object?.keys(userLogins).length > 0 && Object?.keys(userLogins)?.map((e, i) => {
            return(
              <div key={i} className="border-2 border-gray-600 p-2 rounded-md">
                <p>User ID - <span className="text-sm opacity-50">{e}</span></p>
                <div>
                  {userLogins[e] && userLogins[e]?.map((f, i) => {
                    const formattedTime = extractTime(f?.timestamp);
                    return(
                      <div key={i} className="flex gap-5 items-center">
                        <p>Socket Id - <span className="text-sm opacity-50">{f?.socketId}</span></p>
                        <p className={`${f?.message === 'connected' && "text-green-600" || f?.message === 'disconnected' && "text-red-500"}`}>{f?.message}</p>
                        <p className="text-sm opacity-50">{formattedTime[0]} - {formattedTime[1]}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}