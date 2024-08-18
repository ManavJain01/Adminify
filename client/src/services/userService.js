// Importing Axios Packages
import axios from "axios";

//Register Company
export const registerCompany = async (data) => {
  try {
    ///remove it ********************************
    //testing
    delete data.logo;

    ///

    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/create-company`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to Resiter Company");
    }
    return response.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error while registering company:", error);
    return {};
  }
};
//getting company details
export const getCompany = async (data) => {
  try {
    const company = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/get-company`,
      {
        params: data,
      }
    );
    if (company.status !== 200) {
      throw new Error("Failed to get Company Details");
    }
    return company.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error in getting company details:", error);
    return {};
  }
};

//Registing Admin
export const registerAdmin = async (data) => {
  try {
    // const { userName, email, password } = data;
    console.log("Admin-data: ", data);

    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/create-admin`,
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

export const loginAdmin = async (data) => {
  // **************************
  console.log("login admin");
  console.log(data);
  try {
    const admin = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/login-admin`,
      { params: data }
    );
    // console.log(admin, admin.);
    if (admin.status !== 200) {
      throw new Error("Failed to Login!!!");
    }
    return admin.data;
  } catch (error) {
    if (error.response.data) return error.response.data;
    console.log("Error Loggin in", error);
    return {};
  }
};

// Signup
export const signup = async (data) => {
  try {
    const { userName, email, password, company, owner } = data;

    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/signup`,
      {
        name: userName,
        email: email,
        password: password,
        company: company,
        owner: owner,
      }
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
