import { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../../../hooks/useUser";
import LoadingSpinner from "../../../../components/common/LoadingSpinner";
import { FaUserGear } from "react-icons/fa6";
const showCustomers = ({ flag = true }) => {
  //
  const [customers, setCustomers] = useState();
  const { getAllUsers } = useUser();

  useEffect(() => {
    async function getUsersData() {
      const fullList = await getAllUsers();
      setCustomers(fullList);
    }
    getUsersData();
  }, []);

  if (customers && flag)
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
            <th className="px-4 py-2 w-1/4 text-left text-white">View/Edit</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.email} className="hover:bg-blue-900">
              <td className="px-4 py-2 text-white">{customer.name}</td>
              <td className="px-4 py-2 text-white">{customer.email}</td>
              <td className="px-4 py-2 text-white">{customer.join_date}</td>
              <td className="px-4 py-2 text-white">{customer.privilege}</td>
              <td className="px-4 py-2 text-white">₹{customer.payment}</td>
              <td className="flex px-4 py-2 text-white mx-auto">
                <Link to="../view-details" state={customer}>
                  <FaUserGear />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  else if(customers && !flag)
    return (
    <table className="mt-10">
      <thead>
        <tr>
          <th className="px-4 py-2 w-1/4 text-left text-white">User</th>
          <th className="px-4 py-2 w-1/4 text-left text-white">Email Id</th>
          <th className="px-4 py-2 w-1/4 text-left text-white">Privilege</th>
        </tr>
      </thead>

      <tbody>
        {customers.map((customer) => (
          <tr key={customer.email} className="hover:bg-sky-500">
            <td className="px-4 py-2 text-left text-white">{customer.name}</td>
            <td className="px-4 py-2 text-left text-white">{customer.email}</td>
            <td className="px-4 py-2 text-left text-white">{customer.privilege}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  else return <LoadingSpinner />;
};

export default showCustomers;
