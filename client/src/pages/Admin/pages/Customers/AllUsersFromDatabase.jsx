// Importing React Icons
import { TiTick } from "react-icons/ti";
import { IoIosRemoveCircle } from "react-icons/io";

// Importing React Packages
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Importing Custom Hooks
import { useRefresh } from "../../../../hooks/useRefresh"

// Importing Local Files
import LockForNoAuthentication from "../../components/LockForNoAuthentication";

export default function AllUsersFromDatabase() {
  // Custom Hooks
  const { getAllDatabaseUsers, addOrRemoveUserFromCompany } = useRefresh();

  // useSelector
  const admin = useSelector(state => state.user.data);
  const companyOwnerId = useSelector(state => state.company.companyDetails.adminId);

  // useState
  const [allUsers, setAllUsers] = useState([]);

  // useEffect
  useEffect(() => {
    const handleRefersh = async () => {
      const res = await getAllDatabaseUsers();
      setAllUsers(res);
    }

    handleRefersh();
  }, []);

  // Functions
  const handleAdd = async (userId) => {    
    await addOrRemoveUserFromCompany("add", userId);

    const res = await getAllDatabaseUsers();
    setAllUsers(res);
  }

  const handleRemove = async (userId) => {
    await addOrRemoveUserFromCompany("remove", userId);

    const res = await getAllDatabaseUsers();
    setAllUsers(res);
  }

  return (
    <div className={`relative bg-blue-950 flex flex-col h-full mx-auto text-white rounded-lg shadow-lg py-4 ${admin?.privilege === "admin" ? "overflow-auto" : "overflow-hidden"} custom-scrollbar2`}>
      <LockForNoAuthentication />
      <div className="flex items-center px-8">
        <h1 className="flex-1 font-bold text-3xl tracking-widest inline-blk">All Database Users</h1>
        <Link to="/admin/customers" className="text-white bg-gray-600 w-fit px-5 py-2 rounded-lg btn-right">Go Back</Link>
      </div>
      
      {/* All Users */}
      <table className="mt-10">
        <thead>
          <tr>
            <th className="px-8 py-2 w-1/2 text-left text-white">User</th>
            <th className="px-8 py-2 w-1/2 text-left text-white">Email Id</th>
            <th className="px-8 py-2 w-1/2 text-left text-white">Add/Remove</th>
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user, i) => {
            return (
              <tr key={i} className="hover:bg-blue-900">
                <td className="relative px-8 py-2 text-white">
                  {admin?.companyId === user?.companyId && <TiTick className="absolute top-[14px] left-2 text-green-600" />}
                  {user?.name}
                </td>
                <td className="px-8 py-2 text-left text-white">{user?.email}</td>
                <td className="flex items-center gap-5 px-8 py-2 text-left text-white">{user?.companyId && admin?.companyId !== user?.companyId
                  ? <p className="whitespace-nowrap text-xs text-gray-400 pt-2">Already in another company</p>
                  : user?._id === companyOwnerId ? <p className="whitespace-nowrap text-xs text-gray-400 pt-2">Company Owner</p>
                    : admin?.companyId === user?.companyId
                      ?<button onClick={() => handleRemove(user?._id)} className="text-red-600 rounded-lg">Remove User</button>
                      :<button onClick={() => handleAdd(user?._id)} className="text-green-600 rounded-lg">Add User</button>
                }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}