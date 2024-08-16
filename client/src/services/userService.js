// Importing Axios Packages
import axios from 'axios'

// Creating Admin
export const newAdmin = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/createAdmin`, data);

    if (response.status !== 200) {
      throw new Error('Failed to create admin');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Signup
export const signup = async (data) => {
  try {
    const { userName, email, password, company, owner } = data;
    
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/signup`, { name: userName, email: email, password: password, company: company, owner: owner})

    if (response.status !== 200) {
      throw new Error('Failed to Sign Up');
    }

    return response.data;
  } catch (error) {
    if(error.response.data) return error.response.data;
    console.log('Error Signing Up:', error);
    return {};
  }
}

// Login
export const login = async (data) => {
  try {
    const { userName, password } = data;
    
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/login`, { name: userName, password: password})
    
    if (response.status !== 200) {
      throw new Error('Failed to LogIn');
    }

    return response.data;
  } catch (error) {
    if(error.response.data) return error.response.data
    console.log('Error Logging In:', error);
    return {};
  }
}

export const UserSearch = async (user) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/searchUser`, { params: { user: user }})
    
    if (response.status !== 200) {
      throw new Error('Failed to Search User');
    }

    return response.data;
  } catch (error) {
    if(error.response.data) return error.response.data;
    console.log('Error Searching User:', error);
    return [];
  }
}

// Forget Password
export const UserResetPassword = async (data) => {
  try {    
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/reset`, data)
    
    if (response.status !== 200) {
      throw new Error('Failed to Reset Password');
    }

    return response.data;
  } catch (error) {
    if(error.response.data) return error.response.data;
    console.log('Error Resetting Password:', error);
    return [];
  }
}

// Fetching the User
export const fetchUser = async (id) => {
  try {    
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/_id`, { params: { id: id }})
    
    if (response.status !== 200) {
      throw new Error('Failed to Fetch User');
    }

    return response.data;
  } catch (error) {
    console.log('Error Fetching User:', error);
    return [];
  }
}