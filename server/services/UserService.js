// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Importing Models
const Model = require('../models/UserModel');

// Creating Admin
const createAdmin = async (data) => {
  try {
    console.log("data: ", data);
    
  } catch (error) {
    throw error;
  }
}

// SignUp
const signup = async (data) => {
  try {  
    const { name, email, password, company, owner } = data
    let user = await Model.findOne({
      $or: [{ name }, { email }]
    });
    
    if(user === null){
      user = await Model.create({
        name: name,
        email: email,
        password: password,
        company: company,
        owner: owner
      })

      const authToken = jwt.sign((user._id).toString(), jwtSecret)
      return { data: user, authToken: authToken }

    }else{
      throw new Error("User Already exist!!!");
    }
  } catch (error) {
    console.log("Error Occurred while Signing Up:", error.message);
    throw error;
  }
}

// Login
const login = async (data) => {
  try {  
    const { name, password } = data
    
    let user = await Model.findOne({$or: [
      { name: name },
      { email: name }
    ]});

    if(user === null){
      throw new Error("No User Found!!!");
    }else if(user && user.password === password){
      const authToken = jwt.sign((user._id).toString(), jwtSecret)
      return { data: user, authToken: authToken }
    } else throw new Error("Password is Incorrect.");
    
  } catch (error) {
    console.log("Error Occurred while Logging In:", error.message);
    throw error
  }
}

const userSearch = async (data) => {
  try {
    const { name } = data;
    let user = await Model.findOne({$or: [
      { name: name },
      { email: name }
    ]})
    .select('email -_id');

    if(!user) throw new Error('User Not Found.')

    return {email: 'Successful!!!'};    
  } catch (error) {
    console.log("Error Occurred while Searching User:", error.message);
    throw error
  }
}

const userReset = async (data) => {
  try {    
    const {name, password} = data

    await Model
    .updateOne({$or: [{ name: name },{ email: name }]},
      { $set: { "password": password } }
    )

    return {reset: 'Successfull!!!'};    
  } catch (error) {
    console.log("Error Occurred while Resetting Password:", error.message);
    throw error
  }
}

const getUser = async (_id) => {
  try {
    const id = jwt.decode(_id);
  
    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error('Token verification failed:', err);
      }
    });

    return user = await Model.findById(id).select(['name', 'email', 'company', 'owner', '-_id']);
  } catch (error) {
    console.log("Error Occurred while Fetching Error:", error.message);
    throw error
  }
}

const allUsers = async (loggedInUserId) => {
  try {
    const filteredUsers = await Model.find({_id: { $ne: loggedInUserId }}).select("-password")
    
    return filteredUsers;
  } catch (error) {
    console.error("Error Occurred while Fetching All Users:", error.message);
    throw error
  }
}

module.exports = { createAdmin, signup, login, userSearch, userReset, getUser, allUsers }