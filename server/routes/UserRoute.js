// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { signupController, loginController } = require('../controllers/UserController')

// Routes
router.route('/signup').post(signupController);
router.route('/login').post(loginController);

// Exporting router
module.exports = router;