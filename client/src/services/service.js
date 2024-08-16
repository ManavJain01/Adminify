// Importing Axios Packages
import axios from 'axios'

// Creating Company
export const newCompany = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_ServerLocation}/user/createCompany`, data);

    if (response.status !== 200) {
      throw new Error('Failed to create Company');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Company Details
export const CompanyDetailsRequest = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_ServerLocation}/companyDetails`);

    if (response.status !== 200) {
      throw new Error('Failed to get Company Details');
    }

    return response.data;
  } catch (error) {
    throw error.message;
  }
}