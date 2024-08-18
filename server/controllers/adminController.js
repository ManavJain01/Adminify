const service = require("../services/adminService");

const createAdminController = async (req, res) => {
  console.log(req.body);
  try {
    const result = await service.createAdmin(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const loginAdminController = async (req, res) => {
  try {
    const result = await service.loginAdmin(req.query);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

module.exports = { createAdminController, loginAdminController };
