import { Link } from "react-router-dom";

// Importing local files
import ShowCustomers from "./Customers/ShowCustomers";

export default function Customers() {
  return (
    <div className="bg-blue-950 h-full w-full px-8 py-5 rounded-xl shadow-xl">
      <h1 className="font-bold text-3xl tracking-widest inline-blk">
        All Customers
      </h1>
      <Link
        to="../create-user"
        className="text-white bg-green-600 w-fit px-5 py-2 rounded-lg btn-right"
      >
        Add New Customer
      </Link>

      <ShowCustomers flag={true} />
    </div>
  );
}
