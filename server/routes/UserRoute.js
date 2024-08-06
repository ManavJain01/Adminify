// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { signupController, loginController, userController } = require('../controllers/UserController')

// Routes
router.route('/signup').post(signupController);
router.route('/login').post(loginController);
router.route('/_id').get(userController);

// Exporting router
module.exports = router;