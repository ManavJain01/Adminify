// Accessing Express Packages
const express = require("express");
const router = express.Router();

// Importing Middleware
const { protectRoute } = require("../middleware/protectRoute");




// Importing Stripe
const {
  makePayment
} = require("../Stripe/stripe");

// Routes
router.route("/cart-create-checkout-session").post(protectRoute, makePayment);

// Exporting router
module.exports = router;