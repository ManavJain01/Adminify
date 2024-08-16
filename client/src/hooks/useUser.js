// Importing React Packages
import { useNavigate } from "react-router-dom";

// Importing Redux files
import { useDispatch } from "react-redux";
import { creatingInitialState } from "../Redux/features/UserSlice";

// Importing Services
import {
  signup as signupService,
  login as loginService,
  UserSearch,
  UserResetPassword,
  fetchUser,
  registerAdmin,
  registerCompany,
  getCompany,
  loginAdmin,
} from "../services/userService";

export const useUser = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useNavigate
  const navigate = useNavigate();

  const createCompany = async (companyData) => {
    try {
      const company = await registerCompany(companyData);

      // if (typeof user === "string") return user;

      // setting localStorage variables
      localStorage.setItem("authToken", company.authToken);

      return company.data;
    } catch (error) {
      console.log("Error Creating Admin in UseUser Hook: ", error);
    }
  };

  const getCompanyDetails = async (data) => {
    try {
      const company = await getCompany(data);

      return company;
    } catch (error) {
      console.log("Error getting company Details in UseUser Hook: ", error);
    }
  };

  const createAdmin = async (adminData) => {
    try {
      const admin = await registerAdmin(adminData);

      // if (typeof user === "string") return user;

      // setting localStorage variables
      localStorage.setItem("authToken", admin.authToken);

      return admin.data;
    } catch (error) {
      console.log("Error Creating Admin in UseUser Hook: ", error);
    }
  };

  const adminLogin = async (data) => {
    try {
      const admin = await loginAdmin(data);
      console.log("returned:", admin);
      if (typeof admin === "string") return admin;

      // setting localStorage variables
      localStorage.setItem("authToken", admin.authToken);
      return admin.data;
    } catch (error) {
      console.log("Error Logging In admin in UseUser Hook: ", error);
    }
  };

  const signup = async (data) => {
    try {
      const user = await signupService(data);

      if (typeof user === "string") return user;

      // setting localStorage variables
      localStorage.setItem("authToken", user.authToken);

      return user.data;
    } catch (error) {
      console.log("Error Signing Up in UseUser Hook: ", error);
    }
  };

  const login = async (data) => {
    try {
      const user = await loginService(data);

      if (typeof user === "string") return user;

      // setting localStorage variables
      localStorage.setItem("authToken", user.authToken);
      return user.data;
    } catch (error) {
      console.log("Error Logging In in UseUser Hook: ", error);
    }
  };

  const logout = async () => {
    try {
      // removing localStorage variables
      localStorage.removeItem("authToken");

      await getUser();

      navigate("/");
    } catch (error) {
      console.log("Error Logging Out in UseUser Hook: ", error);
    }
  };

  const searchUser = async (user) => {
    try {
      const response = await UserSearch(user);

      return response;
    } catch (error) {
      console.log("Error Resetting password in UseUser Hook: ", error);
    }
  };

  const resetPassword = async (data) => {
    try {
      const response = await UserResetPassword(data);
      return response;
    } catch (error) {
      console.log("Error Resetting password in UseUser Hook: ", error);
    }
  };

  const getUser = async () => {
    try {
      const id = localStorage.getItem("authToken");

      if (id) {
        const data = await fetchUser(id);

        dispatch(creatingInitialState(data));
      } else {
        dispatch(creatingInitialState({}));
      }
    } catch (error) {
      console.log("Error Getting User:", error);
    }
  };

  return {
    createCompany,
    getCompanyDetails,
    createAdmin,
    adminLogin,
    signup,
    login,
    searchUser,
    resetPassword,
    logout,
    getUser,
  };
};
