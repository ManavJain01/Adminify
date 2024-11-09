// Importing Axios Packages
import axios from "axios";

// Importing Stripe Packages
import { loadStripe } from '@stripe/stripe-js'

// Creating Company
export const newCompany = async (data) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/create-company`,
      data
    );

    if (response.status !== 200) {
      throw new Error("Failed to create Company");
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Company Details
export const CompanyDetailsRequest = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/companyDetails?id=${id}`
    );

    if (response.status !== 200) {
      throw new Error("Failed to get Company Details");
    }

    return response.data;
  } catch (error) {
    throw error.message;
  }
};

// All Database Users
export const AllDatabaseUsers = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/allDatabaseUsers`
    );

    if (response.status !== 200) {
      throw new Error("Failed to get All Database Users");
    }

    return response.data;
  } catch (error) {
    throw error.message;
  }
};

// Operation On User
export const OperationOnUser = async (operation, userId, adminId) => {
  try {    
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/operationOnUser?operation=${operation}&id=${adminId}&userId=${userId}`
    );

    if (response.status !== 200) {
      throw new Error("Failed to Operate On User");
    }

    return response.data;
  } catch (error) {
    throw error.message;
  }
};


// Stripe Payment
export const makePayment = async (cartData, companyData) => {
  try {
    const id = localStorage.getItem("authToken");

    const stripe = await loadStripe(import.meta.env.VITE_Stripe_publishable_key);

    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/stripe/cart-create-checkout-session`,
      { cart: cartData, company: companyData },
      { params: { id } }
    );

    if (response.status !== 200) {
      throw new Error("Failed While Payment");
    }    

    const result = stripe.redirectToCheckout({
      sessionId: response.data.sessionId
    });

    if(result.error){
      console.log("result.error");
    }

    return "success";
  } catch (error) {
    throw error;
  }
}