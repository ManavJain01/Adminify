// Importing Services
const service = require('../services/service')

const establishCompany = async (req, res) => {
  try {
    const result = await service.setCompanyDetails(req.body, req.file);
    res.status(200).send(result);
    
  } catch (error) {
    console.error("Error in service::establishCompany: ", error.message);
    res.status(400).send(error.message);
  }
}

const getCompanyDetails = async (req, res) => {
  try {
    const result = await service.companyDetails();
    res.status(200).send(result);
    
  } catch (error) {
    console.error("Error in service::getCompanyDetails: ", error.message);
    res.status(400).send(error.message);
  }
}

// Exporting controllers
module.exports = { establishCompany, getCompanyDetails }