// Importing Services
const service = require("../services/service");

const establishCompany = async (req, res) => {
  try {
    const result = await service.setCompanyDetails(req.body, req.file);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in service::establishCompany: ", error.message);
    res.status(400).send(error.message);
  }
};

const getCompanyDetails = async (req, res) => {
  try {    
    const result = await service.companyDetails(req.user.companyId);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in service::getCompanyDetails: ", error.message);
    res.status(400).send(error.message);
  }
};

const getAllDatabaseUsers = async (req, res) => {
  try {    
    const result = await service.DatabaseUsers();
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in service::getAllDatabaseUsers: ", error.message);
    res.status(400).send(error.message);
  }
};

const DoOperationOnUser = async (req, res) => {
  try {
    const { operation, userId } = req.query;
    const companyId = req.user.companyId;

    const result = await service.OperationOnUser(operation, userId, companyId);
    res.status(200).send(result);
  } catch (error) {
    console.error("Error in service::getAllDatabaseUsers: ", error.message);
    res.status(400).send(error.message);
  }
};

// Exporting controllers
module.exports = { establishCompany, getCompanyDetails, getAllDatabaseUsers, DoOperationOnUser };
