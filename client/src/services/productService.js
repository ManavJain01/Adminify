// Importing Axios Packages
import axios from "axios";

export const productsList = async (id) => {
  try {    
    const response = await axios.get(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/product-list?id=${id}`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const createProductService = async (data, id) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/create-product`,
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

export const updateProductService = async (data, id) => {
  try {    
    const response = await axios.put(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/update-product`,
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

export const deleteProductService = async (productId, companyId, userId) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_REACT_APP_ServerLocation}/user/delete-product`,
      {
        params: { id: userId, productId: productId, companyId: companyId },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};