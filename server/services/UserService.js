// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN

// Importing Models
const Model = require('../models/UserModel');

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
      console.log("User: ", user);
      
      throw new Error("User Already exist!!!");
    }
  } catch (error) {
    console.log("Error Occurred while Signing Up:", error);
    throw error;
  }
}

// Login
const login = async (data) => {
  try {
    const { name } = data
    
    let user = await Model.findOne({$or: [
      { name: name },
      { email: name }
    ]});

    if(user === null){
      throw new Error("No User Found!!!");
    }else{   
      const authToken = jwt.sign((user._id).toString(), jwtSecret)
      return { data: user, authToken: authToken }
    }
    
  } catch (error) {
    console.log("Error Occurred while Logging In:", error);
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
    console.log("Error Occurred while Fetching Error:", error);
    throw error
  }
}

module.exports = { signup, login, getUser }