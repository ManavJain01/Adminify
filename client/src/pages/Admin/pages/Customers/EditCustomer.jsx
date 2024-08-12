import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DeleteConfirmation from "./DeleteConfirmation";

const EditCustomer = () => {
  const location = useLocation();
  const customerData = location.state || {};

  const [customer, setCustomer] = useState(customerData);

  const [isEditing, setIsEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  // const [flg, setFlg] = useState(false);
  // State to show whether the user has been deleted
  // const [userDeleted, setUserDeleted] = useState(false);

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const deleteUser = () => {
    //write code to delete the user
    navigate("../customers");
  };

  // Function to handle the "No" button click
  // const handleNoClick = () => {
  //   setShowPopup(false);
  // };

  // Function to handle the "Yes" button click
  // const handleYesClick = () => {
  //   setUserDeleted(true);
  //   setShowPopup(false);
  // };

  return (
    <div className="flex bg-blue-950 h-full w-full justify-center rounded-xl shadow-xl">
      <div className="w-full max-w-2xl p-6 justify-center text-white">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Customer Details
        </h2>
        <form>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Full Name:
              </label>
              <input
                type="text"
                name="name"
                value={customer.name}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                value={customer.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={customer.username}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={customer.gender}
                disabled={!isEditing}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email:</label>
              <input
                type="email"
                name="email"
                value={customer.email}
                onChange={handleChange}
                disabled={true}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Birthday:
              </label>
              <input
                type="date"
                name="birthday"
                value={customer.birthday}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Password:
              </label>
              <input
                type="text"
                name="password"
                value={customer.password}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500 transition-colors duration-200 ${
                  isEditing
                    ? "border-gray-300"
                    : "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Link
              to="../customers"
              className="text-white bg-green-600 w-fit px-5 py-2 rounded-lg"
            >
              Go Back
            </Link>
            <button
              type="button"
              name={isEditing ? "save" : "edit"}
              onClick={handleEditClick}
              className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
            <button
              type="button"
              onClick={() => setShowPopup(true)}
              className="px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Delete
            </button>

            {showPopup && (
              <DeleteConfirmation popup={setShowPopup} action={deleteUser} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCustomer;
