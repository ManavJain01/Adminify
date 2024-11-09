// Accessing Express Packages
const express = require("express");
const router = express.Router();

// Importing Middleware
const { protectRoute } = require("../middleware/protectRoute");

// Importing Controllers
const {
  establishCompany,
  getCompanyDetails,
  getAllDatabaseUsers,
  DoOperationOnUser
} = require("../controllers/controller");

// Routes
router.get("/", (req, res) => {
  return res.render("homepage");
});
router.route("/create-company").post(establishCompany);
router.route("/companyDetails").get(protectRoute, getCompanyDetails);
router.route("/allDatabaseUsers").get(getAllDatabaseUsers);
router.route("/operationOnUser").get(protectRoute, DoOperationOnUser);

// Exporting router
module.exports = router;
