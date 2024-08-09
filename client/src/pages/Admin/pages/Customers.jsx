import { FaUserEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Customers() {
  const customers = [
    {
      name: "John Doe",
      username: "johndoe",
      email: "John@gmail.com",
      joid_date: "2023-02-01",
      birthday: "2001-02-04",
      privilege: "Admin",
      payment: "200",
      phone: "7544997888",
      gender: "male",
      password: "1234",
    },
    {
      name: "pankaj kumar",
      username: "pankajkumar",
      email: "pankaj@gmail.com",
      joid_date: "2023-02-01",
      birthday: "2001-02-04",
      last_payment_date: "2002-03-09",
      privilege: "Admin",
      payment: "200",
      phone: "7544997888",
      gender: "male",
      password: "45678",
    },
  ];

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

      <table className="mt-10">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/4 text-left text-white">User</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Email Id</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">
              Joined Date
            </th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Privilege</th>
            <th className="px-4 py-2 w-auto text-left text-white">Payment</th>
            <th className="px-4 py-2 w-1/4 text-left text-white">Edit</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email} className="hover:bg-blue-900">
              <td className="px-4 py-2 text-white">{customer.name}</td>
              <td className="px-4 py-2 text-white">{customer.email}</td>
              <td className="px-4 py-2 text-white">{customer.joid_date}</td>
              <td className="px-4 py-2 text-white">{customer.privilege}</td>
              <td className="px-4 py-2 text-white">₹{customer.payment}</td>
              <td className="px-4 py-2 text-white">
                <Link to="../edit-customer" state={customer}>
                  <FaUserEdit />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
