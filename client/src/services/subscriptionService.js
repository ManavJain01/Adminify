// Importing Axios Packages
import axios from "axios";

export const subscriptionList = async (id) => {
  try {    
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/subscription-list?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const createSubscriptionService = async (data, id) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/create-subscription`,
      data,
      {
        params: { id },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const updateSubscriptionService = async (data, id) => {
  try {    
    const response = await axios.put(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/update-subscription`,
      data,
      {
        params: { id },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteSubscriptionService = async (subscriptionId, companyId, userId) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/delete-subscription`,
      {
        params: { id: userId, subscriptionId: subscriptionId, companyId: companyId },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};