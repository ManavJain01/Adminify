import { FaUserEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function showCustomers({ flag = true }) {
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

  if (flag)
    return (
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
    );
  else
    return (
      <table className="mt-10 w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 w-1/3 text-left text-white">User</th>
            <th className="px-4 py-2 w-1/3 text-left text-white">
              Joined Date
            </th>
            <th className="px-4 py-2 w-1/3 text-left text-white">Privilege</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email} className="hover:bg-blue-900">
              <td className="px-4 py-2 text-left text-white">
                {customer.name}
              </td>
              <td className="px-4 py-2 text-left text-white">
                {customer.joid_date}
              </td>
              <td className="px-4 py-2 text-left text-white">
                {customer.privilege}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}
