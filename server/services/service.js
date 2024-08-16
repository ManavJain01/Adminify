// Importing Models
const Model = require('../models/model');

const setCompanyDetails = async (data) => {
  try {
    console.log("data:", data);
    
  } catch (error) {
    console.error("Error Occurred while creating Company Details:", error.message);
    throw error;
  }
}

const companyDetails = async () => {
  try {
    const data = Model.find();

    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = { setCompanyDetails, companyDetails }