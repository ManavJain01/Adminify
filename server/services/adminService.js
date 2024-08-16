const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Models
const Model = require("../models/adminModel");

// SignUp
const createAdmin = async (data) => {
  try {
    let result = await Model.create(data);

    const authToken = jwt.sign(result._id.toString(), jwtSecret);
    return { data: result, authToken: authToken };
  } catch (error) {
    console.log("Error Occurred while creating Admin:", error.message);
    throw error;
  }
};

const loginAdmin = async (data) => {
  console.log("service of login Admin runiing backend", data);
  const { username, password } = data;
  try {
    let admin = await Model.findOne({
      $and: [
        {
          $or: [{ email: username }, { username: username }],
          password: password,
        },
      ],
    });
    if (admin === null) {
      throw new Error("Wrong User Id or Password!!!");
    } else {
      const authToken = jwt.sign(admin._id.toString(), jwtSecret);
      console.log(admin, authToken);
      return { data: admin, authToken: authToken };
    }
  } catch (error) {
    console.log("Error Occured while Loggin in Admin");
    throw error;
  }
};

module.exports = { createAdmin, loginAdmin };
