const service = require("../services/companyService");

const createCompanyController = async (req, res) => {
  try {
    const result = await service.createCompany(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(400).send(error.message);
  }
};

const getCompanyController = async (req, res) => {
  try {
    const result = await service.getCompany(req.query);
    res.status(200).send(result);
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).send(error.message);
  }
};

module.exports = { createCompanyController, getCompanyController };
