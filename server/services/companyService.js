const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Models
const Model = require("../models/companyModel");

// SignUp
const createCompany = async (data) => {
  try {
    let result = await Model.create(data);

    const authToken = jwt.sign(result._id.toString(), jwtSecret);
    return { data: result, authToken: authToken };
  } catch (error) {
    console.log("Error Occurred while creating Company:", error.message);
    throw error;
  }
};

const getCompany = async (data) => {
  try {
    let company = await Model.findOne();

    if (company === null) {
      throw new Error("No Company Found!!!");
    } else {
      const authToken = jwt.sign(company._id.toString(), jwtSecret);
      return { data: company, authToken: authToken };
    }
  } catch (error) {
    console.log("Error Occurred while getting Company: ", error.message);
    throw error;
  }
};

module.exports = { createCompany, getCompany };
