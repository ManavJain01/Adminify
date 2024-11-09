// Importing React Packages
// import { useState, useEffect } from "react";

// Importing Redux files
import { useDispatch, useSelector } from "react-redux";
import { setCompanyDetails as storeCompanyDetails } from "../Redux/features/CompanySlice";

// Importing Services
import { CompanyDetailsRequest, AllDatabaseUsers, OperationOnUser } from "../services/service";

export const useRefresh = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const companyDetails = useSelector((state) => state.company.companyDetails);

  // Functions
  const getCompanyDetails = async () => {
    try {
      const id = localStorage.getItem("authToken");
      if (
        id &&
        !companyDetails?.company &&
        !companyDetails?.owner &&
        !companyDetails?.logo
      ) {
        const response = await CompanyDetailsRequest(id);
        return await setCompanyDetails({
          company: response[0]?.company || "",
          owner: response[0]?.owner || "",
          logo: response[0]?.logo || "",
        });
      }

      return await companyDetails;
    } catch (error) {
      console.error("Error Getting Company Details:", error.message);
    }
  };

  const setCompanyDetails = async (data) => {
    try {
      return dispatch(storeCompanyDetails(data)).payload;
    } catch (error) {
      console.error("Error Getting Company Details:", error.message);
    }
  };

  const getAllDatabaseUsers = async () => {
    try {
      const response = await AllDatabaseUsers();
      return response;
    } catch (error) {
      console.error("Error Getting Database Users:", error.message);
    }
  }

  const addOrRemoveUserFromCompany = async (operation, userId) => {
    try {
      const id = localStorage.getItem("authToken");
      if (id){
        const response = await OperationOnUser(operation, userId, id);
        return response;

      } else throw Error("No Token Found!")
    } catch (error) {
      console.error("Error Getting Database Users:", error.message);
    }
  }

  return {
    getCompanyDetails,
    setCompanyDetails,
    getAllDatabaseUsers,
    addOrRemoveUserFromCompany
  };
};
