// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { establishCompany, getCompanyDetails } = require('../controllers/controller')

// Routes
router.route('/create-company').post(establishCompany);
router.route('/companyDetails').get(getCompanyDetails);

// Exporting router
module.exports = router;