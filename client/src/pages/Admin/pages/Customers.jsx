// importing React Packages
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing local files
import ShowCustomers from "./Customers/ShowCustomers";
import LockForNoAuthentication from "../components/LockForNoAuthentication";

export default function Customers() {
  // useSelector
  const user = useSelector(state => state.user.data);

  return (
    <div className={`relative bg-blue-950 flex flex-col items-center gap-5 h-full w-full px-8 py-5 rounded-xl shadow-xl ${user?.privilege === "admin" ? "overflow-auto" : "overflow-hidden"} custom-scrollbar2`}>
      <LockForNoAuthentication />
      
      <div className="flex items-center justify-between gap-5 w-full">
        <h1 className="flex-1 font-bold text-3xl tracking-widest inline-blk">
          All Customers
        </h1>
        <Link
          to="../database-users"
          className="text-white bg-green-600 w-fit px-5 py-2 rounded-lg btn-right"
        >
          Add New Customer From Database
        </Link>

        <Link
          to="../create-user"
          className="text-white bg-green-600 w-fit px-5 py-2 rounded-lg btn-right"
        >
          Create New Customer
        </Link>
      </div>

      <ShowCustomers flag={true} />
    </div>
  );
}
