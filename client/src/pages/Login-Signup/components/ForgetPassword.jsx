// Importing React Packages
import { useState } from "react";

// Importing Custom Hooks
import { useUser } from "../../../hooks/useUser";

export default function ForgetPassword({ setForgetPassword }) {
  // Custom Hook
  const { searchUser, resetPassword } = useUser();

  // useState
  const [error, setError] = useState("");
  const [showPassInput, setShowPassInput] = useState(false);

  const getUser = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const user = await searchUser(data);
    if (typeof user === "string") {
      setError(user);
      return;
    }

    if (user.email) {
      setError("");
      setShowPassInput(true);
    }
  };

  const reset = async (e) => {
    e.preventDefault();

    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.password || !data.newPassword) {
      setError("All Inputs Required.");
      return;
    }

    if (data.password !== data.newPassword) {
      setError("Passwords not match.");
      return;
    }

    const response = await resetPassword({
      name: data.name,
      password: data.password,
    });
    if (response) {
      setForgetPassword(false);
    }
  };

  return (
    <form
      onSubmit={(e) => (showPassInput ? reset(e) : getUser(e))}
      className={`z-20 relative flex flex-col gap-10 ${
        showPassInput ? "" : "justify-between"
      } h-full`}
    >
      <section className="text-black flex flex-col gap-5">
        <span className="font-bold text-3xl text-blue-900">
          Find your Account
        </span>
        <span className="text-white">
          Please enter your email address or username to search for your
          account.
        </span>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Email ID or Username"
          className="w-full px-5 py-2 rounded-full outline-none"
        />
        {error && (
          <span className="text-sm text-red-500 text-center">{error}</span>
        )}
      </section>

      {showPassInput ? (
        <div className="text-black flex flex-col gap-8">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="New Password"
            className="w-full px-5 py-2 rounded-full outline-none"
          />
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Confirm new Password"
            className="w-full px-5 py-2 rounded-full outline-none"
          />
          <div className="font-semibold text-xl flex gap-5 flex-wrap">
            <button
              onClick={(e) => {
                e.preventDefault();
                setForgetPassword(false);
              }}
              className="flex-1 text-black bg-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button className="flex-1 text-white bg-green-600 px-5 py-2 rounded-lg">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="font-semibold text-xl flex gap-5 flex-wrap justify-end">
          <button
            onClick={(e) => {
              e.preventDefault();
              setForgetPassword(false);
            }}
            className="text-black bg-white px-5 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button className="text-white bg-green-600 px-5 py-2 rounded-lg">
            Search
          </button>
        </div>
      )}
    </form>
  );
}
