// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Configuration files
const { cloudinary } = require('../conf/cloudinary')

// Importing Models
const Model = require("../models/UserModel");
const { default: mongoose } = require("mongoose");

// Creating Admin
const createAdmin = async (data) => {
  try {
    const newAdmin = await Model.create({
      name: data.userName,
      email: data.email,
      password: data.password,
      privilege: "admin",
    });

    const authToken = jwt.sign(newAdmin._id.toString(), jwtSecret);
    return { authToken: authToken };
  } catch (error) {
    throw error;
  }
};

// Creating Admin
const createUser = async (data, img) => {
  try {
    const profile_img = await cloudinary.uploader.upload(img?.path);
    if(profile_img){
      data.profile_img = profile_img.secure_url;
    }

    // Delete the file from local storage
    fs.unlink(img.path, (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
        return;
      }
    });

    const newUser = await Model.create(data);
    const authToken = jwt.sign(newUser._id.toString(), jwtSecret);
    return { authToken: authToken };
  } catch (error) {
    throw error;
  }
};

const putUser = async (data, img) => {
  if(img?.path){
    const profile_img = await cloudinary.uploader.upload(img?.path);
    data.profile_img = profile_img.secure_url;

    // Delete the file from local storage
    fs.unlink(img.path, (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
        return;
      }
    });
  }

  // const ObjId = new mongoose.Types.ObjectId(data._id);
  // delete data._id;
  try {
    const result = await Model.updateOne({ _id: data._id }, data, {
      runValidators: true,
    });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  const objId = new mongoose.Types.ObjectId(id);
  try {
    const result = await Model.deleteOne({ _id: objId });
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

// SignUp
const signup = async (data) => {
  try {
    const { userName, fullName, email, password } = data;
    let user = await Model.findOne({
      $or: [{ userName }, { email }],
    });

    if (user === null) {
      user = await Model.create({
        name: fullName,
        username: userName,
        email: email,
        password: password,
        privilege: "user",
      });

      const authToken = jwt.sign(user._id.toString(), jwtSecret);
      return { authToken: authToken };
    } else {
      throw new Error("User Already exist!!!");
    }
  } catch (error) {
    console.log("Error Occurred while Signing Up:", error.message);
    throw error;
  }
};

// Login
const login = async (data) => {
  try {
    const { name, password } = data;

    let user = await Model.findOne({ $or: [{ username: name }, { email: name }] });

    if (user === null) {
      throw new Error("No User Found!!!");
    } else if (user && user.password === password) {
      const authToken = jwt.sign(user._id.toString(), jwtSecret);
      return { authToken: authToken };
    } else throw new Error("Password is Incorrect.");
  } catch (error) {
    console.log("Error Occurred while Logging In:", error.message);
    throw error;
  }
};

const userSearch = async (data) => {
  try {
    const { name } = data;
    let user = await Model.findOne({
      $or: [{ username: name }, { email: name }],
    }).select("email -_id");

    if (!user) throw new Error("User Not Found.");

    return { email: "Successful!!!" };
  } catch (error) {
    console.log("Error Occurred while Searching User:", error.message);
    throw error;
  }
};

const userReset = async (data) => {
  try {
    const { name, password } = data;

    await Model.updateOne(
      { $or: [{ username: name }, { email: name }] },
      { $set: { password: password } }
    );

    return { reset: "Successfull!!!" };
  } catch (error) {
    console.log("Error Occurred while Resetting Password:", error.message);
    throw error;
  }
};

const getUser = async (_id) => {
  try {
    const id = jwt.decode(_id);

    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error("Token verification failed:", err);
      }
    });

    return (user = await Model.findById(id).select(["-password"]));
  } catch (error) {
    console.log("Error Occurred while Fetching Error:", error.message);
    throw error;
  }
};

const allUsers = async (loggedInUserId) => {
  try {
    const filteredUsers = await Model.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return filteredUsers;
  } catch (error) {
    console.error("Error Occurred while Fetching All Users:", error.message);
    throw error;
  }
};

const userList = async () => {
  try {
    const userlist = await Model.find();
    return userlist;
  } catch (error) {
    console.error("Error Occurred while Fetching All Users:", error.message);
    throw error;
  }
};

module.exports = {
  createAdmin,
  createUser,
  deleteUser,
  putUser,
  userList,
  signup,
  login,
  userSearch,
  userReset,
  getUser,
  allUsers,
};
