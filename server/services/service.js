// Importing Node Modules
const fs = require("fs");
const path = require("path");

// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Models
const Model = require("../models/model");
const UserModel = require("../models/UserModel");

// Importing Services
const UserService = require("./UserService");

const setCompanyDetails = async (data, logo) => {
  try {
    // Check if file is uploaded
    if (!logo) {
      return res.status(400).json({ message: "Logo is required" });
    }

    const { userName, email, password } = data;
    const { company, owner } = data;
    console.log("logo:", logo);

    // const newCompany = await Model.create({
    //   company: company,
    //   owner: owner,
    //   logo: {
    //     data: fs.readFileSync(logo.path),  // Read the file as a Buffer
    //     contentType: logo.mimetype,        // Store the MIME type
    //   }
    // });

    const newCompany = await Model.create({
      company: company,
      owner: owner,
      logo: logo.filename,
    });

    // Delete the file from local storage
    fs.unlink(logo.path, (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
        return;
      }
    });

    // Creating Admin
    return await UserService.createAdmin({ userName, email, password });
  } catch (error) {
    console.error("Error Occurred while creating Company:", error.message);
    throw error;
  }
};

const companyDetails = async () => {
  try {
    const data = await Model.find();

    // const companies = data.map(company => {
    //   if (company.logo && company.logo.data) {
    //     company.logo = {
    //       data: company.logo.data.toString('base64'),
    //       contentType: company.logo.contentType,
    //     };
    //   }
    //   return company;
    // });
    // console.log(companies[0].logo);

    // return companies;
    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = { setCompanyDetails, companyDetails };
