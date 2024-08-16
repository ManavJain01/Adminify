// Importing Axios Packages
import axios from 'axios'

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