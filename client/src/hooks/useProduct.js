// Importing React Packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importing Services
import {
  productsList,
  createProductService,
  updateProductService,
  deleteProductService
} from "../services/productService";

export const useProduct = () => {
  // useNavigate
  const navigate = useNavigate();

  // Functions
  const AllProducts = async (data) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const res = await productsList(id);
        
        return res.data;
      } else throw new Error("No Token Found");
    } catch (error) {
      console.error("Error Getting Products: ", error.message);
    }
  };

  const CreateProduct = async (product) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const res = await createProductService(product, id);
        
        return res.data;
      } else throw new Error("No Token Found");
    } catch (error) {
      console.error("Error Creating Product: ", error.message);
    }
  };

  const UpdateProduct = async (product) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {
        const res = await updateProductService(product, id);

        return res.data;
      } else throw new Error("No Token Found");
    } catch (error) {
      console.error("Error Updating Product: ", error.message);
    }
  };

  const DeleteProduct = async (productId, companyId) => {
    try {
      const id = localStorage.getItem("authToken");
      if(id) {        
        const res = await deleteProductService(productId, companyId, id);
        
        return res.data;
      }
    } catch (error) {
      console.error("Error Deleting Product: ", error.message);
    }
  };

  return {
    AllProducts,
    DeleteProduct,
    CreateProduct,
    UpdateProduct
  };
}