// Importing Node Modules
const fs = require("fs");
const path = require("path");

// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Configuration files
const { cloudinary } = require('../conf/cloudinary')

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

    const { fullName, userName, email, password } = data;
    const { company, owner } = data;

    const result = await cloudinary.uploader.upload(logo.path);

    // Creating the company
    await Model.create({
      company: company,
      owner: owner,
      logo: result.secure_url
    });


    // Delete the file from local storage
    fs.unlink(logo.path, (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
        return;
      }
    });

    // Creating Admin
    return await UserService.createAdmin({ fullName, userName, email, password });
  } catch (error) {
    throw error;
  }
};

const companyDetails = async (companyId) => {
  try {
    const data = await Model.find({ _id: companyId });

    return data;
  } catch (error) {
    throw error;
  }
};

const DatabaseUsers = async () => {
  try {
    const data = await UserModel.find({});

    return data;
  } catch (error) {
    throw error;
  }
};

const OperationOnUser = async (operation, userId, companyId) => {
  try {
    if(operation === "add") {
      await UserModel.updateOne({ _id: userId }, { $set: { companyId: companyId } },
        { runValidators: true }
      );
    } else if(operation === "remove") {
      await UserModel.updateOne({ _id: userId }, { $unset: { companyId: "" } },
        { runValidators: true }
      );
    } else throw Error("Wrong Operation");
    
    return "success";
  } catch (error) {
    throw error;
  }
};

module.exports = { setCompanyDetails, companyDetails, DatabaseUsers, OperationOnUser };
