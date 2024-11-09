// importing React Packages
import { useState } from "react";
import { useSelector } from "react-redux";

// Importing local files
import UserLogin from "./Reports/UserLogin";
import ErrorLogs from "./Reports/ErrorLogs";
import LockForNoAuthentication from "../components/LockForNoAuthentication";

export default function Reports() {
  // useSelector
  const user = useSelector(state => state.user.data);

  // useState
  const [panelSelected, setPanelSelected] = useState("1");

  return (
    <div className={`relative bg-blue-950 flex h-[40rem] w-full px-8 py-5 rounded-xl shadow-xl ${user?.privilege === "admin" ? "overflow-auto" : "overflow-hidden"} custom-scrollbar2`}>
      <LockForNoAuthentication />
      
      <div className="flex-1">
        {/* User Logins */}
        {panelSelected === "1"
          &&<UserLogin />
        }

        {panelSelected === "2"
          &&<ErrorLogs />
        }
      </div>

      <select name="reports" id="reports" defaultValue='1' onChange={(e) => setPanelSelected(e.target.value)} className="text-xl font-semibold text-black h-fit py-1 px-5 border-2 border-blue-400 rounded-md outline-none">
        <option value="1">User logins</option>
        <option value="2">Error Logs</option>
      </select>
    </div>
  );
}
