// Importing React Packages

// Importing Redux files
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyDetails as storeCompanyDetails } from '../Redux/features/CompanySlice'

// Importing Services
import { CompanyDetailsRequest } from '../services/service'

export const useRefresh = () => {
  // useDispatch
  const dispatch = useDispatch();

  // useSelector
  const companyDetails = useSelector((state) => state.company.companyDetails);

  const getCompanyDetails = async (compo = "") => {
    try {
      if(!companyDetails.company || !companyDetails.owner || !companyDetails.logo){
        const response = await CompanyDetailsRequest();
        console.log("useRefresh: ", response);
      }

      return companyDetails;
    } catch (error) {
      console.error("Error Getting Company Details:", error.message);   
    }
  }

  const setCompanyDetails = async (data) => {
    try {
      dispatch(storeCompanyDetails(data));

    } catch (error) {
      console.error("Error Getting Company Details:", error.message);   
    }
  }

  return { getCompanyDetails, setCompanyDetails }
}