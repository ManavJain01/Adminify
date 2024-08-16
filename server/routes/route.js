// Accessing Express Packages
const express = require("express");
const router = express.Router();

// Importing Controllers
const {} = require("../controllers/controller");
const {
  createAdminController,
  loginAdminController,
} = require("../controllers/adminController");
const {
  createCompanyController,
  getCompanyController,
} = require("../controllers/companyController");

router.route("/create-admin").post(createAdminController);
router.route("/login-admin").get(loginAdminController);

router.route("/create-company").post(createCompanyController);
router.route("/get-company").get(getCompanyController);

// Exporting router
module.exports = router;
