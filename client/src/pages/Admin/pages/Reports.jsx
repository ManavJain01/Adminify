// importing React Packages
import { useState } from "react";

// Importing local files
import UserLogin from "./Reports/UserLogin";
import ErrorLogs from "./Reports/ErrorLogs";

export default function Reports() {

  // useState
  const [panelSelected, setPanelSelected] = useState("1");

  return (
    <div className="bg-blue-950 flex h-[40rem] w-full px-8 py-5 rounded-xl shadow-xl overflow-auto custom-scrollbar2">
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
