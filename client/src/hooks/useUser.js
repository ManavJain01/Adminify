// Importing React Packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importing Redux files
import { useDispatch } from "react-redux";
import { creatingInitialState } from "../Redux/features/UserSlice";
import { emptyCart } from "../Redux/features/CartSlice";
import { emptyCompanyRelatedDetails } from "../Redux/features/CompanySlice";

// Clerk
import { useAuth, useUser as useClerkUser } from '@clerk/clerk-react';

// Importing Services
import {
  signup as signupService,
  login as loginService,
  clerkLogin,
  UserSearch,
  UserResetPassword,
  fetchUser,
  newAdmin,
  newUser,
  usersList,
  updateUserService,
  deleteUserService,
} from "../services/userService";

export const useUser = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useNavigate
  const navigate = useNavigate();

  // Clerk
  const { signOut } = useAuth();
  const { user : clerkUser } = useClerkUser();

  // useState
  const [ isLogin, setIsLogin ] = useState(false);

  // useEffect
  useEffect(() => {
    const handleRefresh = async () => {
      try {
        if(clerkUser) {
          // Fetching Clerk Data
          const email = clerkUser?.primaryEmailAddress?.emailAddress;
          const fullName = clerkUser?.fullName;
          
          // Setting User to our Database
          const token = await clerkLogin({ email: email, fullName: fullName });
  
          if(token && token?.authToken && typeof token?.authToken === 'string') {
            localStorage.setItem("authToken", token?.authToken);
          } else {
            throw new Error("User Token from clerk is Invalid");
          }
          
          // Now User Is Logged In
          setIsLogin(true);
        } else if(localStorage.getItem("authToken")) setIsLogin(true);
          
      } catch (error) {
        console.error(error.message);
      }
    }
  
    handleRefresh();
  }, [clerkUser]);

  // Functions
  const createAdmin = async (data) => {
    try {
      const user = await newAdmin(data);

      return user;
    } catch (error) {
      console.error("Error creating Admin in UseUser Hook: ", error.message);
    }
  };

  const createUser = async (data) => {
    try {
      const user = await newUser(data);

      return user;
    } catch (error) {
      console.error("Error creating Admin in UseUser Hook: ", error.message);
    }
  };

  const updateUser = async (data) => {
    try {
      const id = localStorage.getItem("authToken");
      const user = await updateUserService(data, id);
      return user;
    } catch (error) {
      console.log("Error during Updating Details!!", error);
    }
  };

  const deleteUser = async (data) => {
    try {
      const user = await deleteUserService(data);
      return user;
    } catch (error) {
      console.log("Error while deleting use", error);
    }
  };

  const signup = async (data) => {
    try {
      const user = await signupService(data);

      if (typeof user === "string") return user;

      // setting localStorage variables
      localStorage.setItem("authToken", user.authToken);

      setIsLogin(true);

      return "success";
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

      setIsLogin(true);

      return "success";
    } catch (error) {
      console.log("Error Logging In in UseUser Hook: ", error);
    }
  };

  const logout = async () => {
    try {
      // removing localStorage variables
      localStorage.removeItem("authToken");

      // Empty User Data
      await getUser();
      // Empty Cart Data
      dispatch(emptyCart());
      // Empty Company Related Details
      dispatch(emptyCompanyRelatedDetails());

      // Clerk Function
      if (clerkUser) await signOut();

      setIsLogin(false);

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

  const getAllUsers = async () => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const response = await usersList(3, id);
        return response.data;
      } else return "No Token Found"
    } catch (error) {
      console.log("Error while getAllUsers", error);
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
    isLogin,
    createAdmin,
    createUser,
    updateUser,
    deleteUser,
    signup,
    login,
    getAllUsers,
    searchUser,
    resetPassword,
    logout,
    getUser,
  };
};
