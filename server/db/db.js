// Accessing MongoDB Packages
const mongoose = require('mongoose')

// Importing env file
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI

// Connecting MongoDB DataBase
const mongoDB = async () => {
  try {
    await mongoose.connect(`${mongoURI}/FitHub`);
    console.log("MongoDB Connected.");
    
  } catch (error) {
    console.log("err:", error.message);
  }
}

module.exports = mongoDB;