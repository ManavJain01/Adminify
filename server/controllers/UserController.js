// Importing Services
const service = require("../services/UserService");
const reportService = require("../services/ReportService");

// Creating Admin
const createAdminController = async (req, res) => {
  try {
    const result = await service.createAdmin(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

// Creating User
const createUserController = async (req, res) => {
  try {
    const result = await service.createUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

//Update User
const putUserController = async (req, res) => {
  try {
    const result = await service.putUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(404).send(result);
  }
};

const deleteUserController = async (req, res) => {
  try {
    const result = await service.deleteUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(204).send(error);
  }
};

// Signup
const signupController = async (req, res) => {
  try {
    const result = await service.signup(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

// Login
const loginController = async (req, res) => {
  try {
    const result = await service.login(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const searchUserController = async (req, res) => {
  try {
    const result = await service.userSearch(req.query.user);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

// reset Password
const resetController = async (req, res) => {
  try {
    const result = await service.userReset(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const userController = async (req, res) => {
  try {
    const result = await service.getUser(req.query.id);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const allUsersController = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const result = await service.allUsers(loggedInUserId);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const userListController = async (req, res) => {
  try {
    const result = await service.userList();
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

// Reports
const userLoginsController = async (req, res) => {
  try {
    const result = await reportService.fetchLogins();
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
}

// Exporting controllers
module.exports = {
  createAdminController,
  createUserController,
  putUserController,
  deleteUserController,
  signupController,
  loginController,
  searchUserController,
  resetController,
  userController,
  allUsersController,
  userListController,
  // Reports
  userLoginsController
};
