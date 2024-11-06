// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Models
const User = require("../models/UserModel");
const Admin = require("../models/AdminModel");

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt || req.query.id;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - No Token Provided" });
    }

    const decoded = jwt.verify(token, jwtSecret);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }
    
    const user = await User.findById(decoded).select("-password")
      || await Admin.findById(decoded).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { protectRoute };
