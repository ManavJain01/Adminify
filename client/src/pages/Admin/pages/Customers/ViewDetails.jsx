import React, { useState } from "react";
import RemainingDays from "./RemainingDays";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "../../../../hooks/useUser";

const ViewDetails = () => {
  const location = useLocation();
  const initialCustomer = location.state || {};
  // console.log(initialCustomer);

  const [customer, setCustomer] = useState(initialCustomer);
  const [isEditing, setIsEditing] = useState(false);
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

    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-blue-950 rounded-xl">
      <div className="bg-blue-950 max-w-4xl mx-auto text-white rounded-lg shadow-lg p-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div className="flex-1 mt-10">
            <h1 className="text-3xl font-bold mb-1">{customer.name}</h1>
            <p className="text-lg">{customer.email}</p>
          </div>
          {!isEditing && (
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <RemainingDays
                subscriptionType={"Pro"}
                subscribedOn={"2024-05-01"}
              />
            </div>
          )}
        </div>
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${
            isEditing ? "md:gap-3" : "md:gap-4"
          }`}
        >
          {[
            { label: "Name", key: "name" },
            { label: "Email", key: "email" },
            { label: "Username", key: "username" },
            { label: "Phone", key: "phone" },
            { label: "Privilege", key: "privilege" },
            { label: "Birthday", key: "birthday" },
            { label: "Age", key: "age" },
            { label: "Gender", key: "gender" },
            { label: "Address", key: "address" },
            { label: "Join Date", key: "join_date" },
            { label: "Payment", key: "payment" },
            { label: "Aadhaar", key: "aadhaar" },
            { label: "Subscription Type", key: "subscription_type" },
            { label: "Subscribed On", key: "subscribed_on" },
            { label: "Password", key: "password" },
          ].map((field, index) => (
            <div key={index} className="p-2">
              <label className="block text-sm font-medium text-white mb-1">
                {field.label}
              </label>
              {isEditing ? (
                <input
                  type={
                    field.key === "birthday" ||
                    field.key === "joinDate" ||
                    field.key === "subscribed_on"
                      ? "date"
                      : "text"
                  }
                  name={field.key}
                  value={customer[field.key]}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded bg-white text-black"
                />
              ) : (
                <p>{customer[field.key]}</p>
              )}
            </div>
          ))}
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
