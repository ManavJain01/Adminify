import React, { useState } from "react";
import RemainingDays from "./RemainingDays";
import { useLocation } from "react-router-dom";

const ViewDetails = () => {
  // const initialCustomer = {
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   username: "johndoe123",
  //   phone: "+1234567890",
  //   privilege: "Premium",
  //   birthday: "1990-01-01",
  //   age: 34,
  //   gender: "Male",
  //   address: "123 Main St, City, Country",
  //   joinDate: "2020-08-15",
  //   payment: "Credit Card",
  //   aadhaar: "1234-5678-9123",
  //   subscriptionType: "Pro (1 year)",
  //   subscribedOn: "2024-05-01",
  // };

  const location = useLocation();
  const initialCustomer = location.state || {};
  console.log(initialCustomer);

  const [customer, setCustomer] = useState(initialCustomer);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setCustomer({ ...customer });
    console.log(customer);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setCustomer(initialCustomer);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Implement delete logic if needed
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
            { label: "Join Date", key: "joinDate" },
            { label: "Payment", key: "payment" },
            { label: "Aadhaar", key: "aadhaar" },
            { label: "Subscription Type", key: "subscriptionType" },
            { label: "Subscribed On", key: "subscribedOn" },
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
                    field.key === "subscribedOn"
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
              <button
                onClick={handleDeleteClick}
                className="bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Delete
              </button>
            </div>
          ) : (
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;