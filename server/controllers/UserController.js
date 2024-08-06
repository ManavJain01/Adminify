// Importing Services
const service = require('../services/UserService')

// Signup
const signupController = async (req, res) => {
  try {
    const result = await service.signup(req.body);
    res.status(200).send(result);
    
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Login
const loginController = async (req, res) => {
  try {
    const result = await service.login(req.body); 
    res.status(200).send(result);

  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

const userController = async (req, res) => {
  try {
    const result = await service.getUser(req.query.id); 
    res.status(200).send(result);

  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error);
  }
}

// Exporting controllers
module.exports = { signupController, loginController, userController }