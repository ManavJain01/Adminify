// Importing Axios Packages
import axios from "axios";

// User Logins
export const loginService = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/fetchLogins`);

    if (response.status !== 200) {
      throw new Error("Failed to fetch login services");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};