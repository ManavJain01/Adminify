// Accessing Express Packages
const express = require("express");
const router = express.Router();

// Importing Controllers
const {
  establishCompany,
  getCompanyDetails,
} = require("../controllers/controller");

// Routes
router.get("/", (req, res) => {
  return res.render("homepage");
});
router.route("/create-company").post(establishCompany);
router.route("/companyDetails").get(getCompanyDetails);

// Exporting router
module.exports = router;
