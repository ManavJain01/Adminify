// Importing React Packages
import { useNavigate } from "react-router-dom";

// Importing Redux files
import { useDispatch } from "react-redux";
import { creatingInitialState } from "../Redux/features/UserSlice";

// Importing Services
import { newCompany } from "../services/service";

export const useHook = () => {
  // useDispatch
  const dispatch = useDispatch();

  const createCompany = async (data) => {
    try {
      const user = await newCompany(data);

      // setting localStorage variables
      localStorage.setItem("authToken", user.authToken);

      return "success";
    } catch (error) {
      console.error("Error creating Company in UseUser Hook: ", error.message);
    }
  };

  return { createCompany };
};
