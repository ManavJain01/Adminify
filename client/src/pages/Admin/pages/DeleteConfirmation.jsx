import { Link } from "react-router-dom";

function DeleteConfirmation({ popup, action }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-4 text-center text-black">
          Are you sure you want to delete this user?
        </p>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => popup(false)}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            No
          </button>
          <button
            type="button"
            onClick={() => {
              popup(false);
              action();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
