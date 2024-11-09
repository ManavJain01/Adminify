// Importing Axios Packages
import axios from "axios";

// Creating Admin
export const newAdmin = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/createAdmin`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to create admin");
    }

    return response.data;
  } catch (error) {
    throw new Error("Error in newAdmin", error);
  }
};

// Creating User
export const newUser = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/createUser`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to create user");
    }

    return response.data;
  } catch (error) {
    throw new Error("Error in newUser", error);
  }
};

// Signup
export const signup = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/signup`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to Sign Up");
    }

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error Signing Up:", error);
    return {};
  }
};

// Login
export const login = async (data) => {
  try {
    const { userName, password } = data;

    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/login`,
      { name: userName, password: password }
    );

    if (response.status !== 200) {
      throw new Error("Failed to LogIn");
    }

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error Logging In:", error);
    return {};
  }
};

// Clerk Login/ Signup
export const clerkLogin = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/clerkLogin`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to Clerk LogIn");
    }

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.error("Error Clerk Logging In:", error);
    return null;
  }
}

export const usersList = async (number, id) => {
  try {    
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/user-list?id=${id}`
    );
    return response;
  } catch (error) {
    console.log("Error while getting all users", error);
  }
};

export const updateUserService = async (data, id) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/update-user`,
      data,
      {
        params: { id },
      }
    );
    return response;
  } catch (error) {
    console.log("Error in updateUserService: ", error);
  }
};

export const deleteUserService = async (data) => {
  const id = data._id;
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/delete-user`,
      {
        params: { id },
      }
    );
    return response;
  } catch (error) {
    console.log("Error in DeleteUserService: ", error);
  }
};

export const UserSearch = async (user) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/searchUser`,
      { params: { user: user } }
    );

    if (response.status !== 200) {
      throw new Error("Failed to Search User");
    }

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error Searching User:", error);
    return [];
  }
};

// Forget Password
export const UserResetPassword = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/reset`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to Reset Password");
    }

    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error Resetting Password:", error);
    return [];
  }
};

// Fetching the User
export const fetchUser = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/_id`,
      { params: { id: id } }
    );

    if (response.status !== 200) {
      throw new Error("Failed to Fetch User");
    }

    return response.data;
  } catch (error) {
    console.log("Error Fetching User:", error);
    return [];
  }
};
