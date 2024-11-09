import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import React, { useState } from "react";
import RemainingDays from "./RemainingDays";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../../hooks/useUser";

const ViewDetails = () => {
  const location = useLocation();
  const initialCustomer = location.state || {};
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(initialCustomer);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { updateUser, deleteUser } = useUser();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setCustomer({ ...customer });
    updateUser(customer);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setCustomer(initialCustomer);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Implement delete logic if needed
    deleteUser(customer);
    navigate("../customers");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-blue rounded-xl">
      <div className="bg-blue-950 max-w-4xl mx-auto text-white rounded-lg shadow-lg p-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="flex-1 mt-10">
            <h1 className="text-3xl font-bold mb-1">{customer.name}</h1>
            <p className="text-lg">{customer.email}</p>
          </div>
          {!isEditing && (
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <RemainingDays subscription={customer?.subscription} />
            </div>
          )}
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
            isEditing ? "md:gap-3" : "md:gap-4"
          }`}
        >
          {[
            { label: "Name", key: "name", type: "text" },
            { label: "Email", key: "email",  type: "email" },
            { label: "Username", key: "username", type: "text" },
            { label: "Phone", key: "phone", type: "number" },
            { label: "Privilege", key: "privilege", type: "text" },
            { label: "Birthday", key: "birthday", type: "date" },
            { label: "Age", key: "age", type: "number" },
            { label: "Gender", key: "gender", type: "text" },
            { label: "Address", key: "address", type: "text" },
            { label: "Join Date", key: "join_date", type: "date" },
            { label: "Payment", key: "payment", type: "number" },
            { label: "Aadhaar", key: "aadhaar", type: "number" },
            { label: "Password", key: "password", type: showPassword ? "text" : "password" },
          ].map((field, index) => (
            <div key={index} className="p-2">
              <label className="block text-sm font-medium text-white mb-1">
                {field.label}
              </label>
              {isEditing ? field.key === "privilege"
                ?(
                  <select name="privilege" id="privilege" value={customer?.privilege || "user"} onChange={handleChange} className="text-black w-full h-[45px] rounded-[5px] outline-none">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                )
                :(
                  <div className="relative">
                    <input
                      type={ field.type }
                      name={field.key}
                      value={customer[field.key]}
                      onChange={handleChange}
                      className={`w-full p-2 ${field.key === "password" && "pr-8"} border border-gray-300 rounded bg-white text-black outline-none`}
                    />

                    {field.key === "password"
                      && <button onClick={() => setShowPassword(!showPassword)} className="absolute top-3 right-2 text-black bg-white">
                        {showPassword
                          ?<FaEyeSlash />
                          : <FaEye />
                        }
                      </button>
                    }
                  </div>
              ) : (
                <p>{customer[field.key]}</p>
              )}
            </div>
          ))}

          {isEditing
            &&<div className="flex flex-col gap-1 mx-2 mt-2 mb-0">
            <label htmlFor="add-him" className="font-semibold text-sm">Add him to your company?</label>
            <select name="add-him" id="add-him" value={customer["add-him"] ? customer["add-him"] : customer?.companyId ? "yes": "no"} onChange={handleChange} className="text-black w-full h-[45px] px-1 rounded-[5px] outline-none">
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
            </div>
          }
        </div>

        <div className="mt-8 text-center">
          {isEditing ? (
            <div className="flex justify-center space-x-2">
              <button
                onClick={handleCancelClick}
                className="bg-gray-400 text-white px-3 py-1 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveClick}
                className="bg-green-500 text-white px-3 py-1 rounded-lg"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex gap-5 items-center justify-center">
              <Link
                to="/admin/customers"
                className="bg-gray-500 hover:bg-gray-600 px-5 py-2 rounded-lg shadow-lg"
              >
                Back
              </Link>
              <button
                onClick={handleEditClick}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
