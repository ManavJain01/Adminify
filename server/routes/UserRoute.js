// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { signupController, loginController, searchUserController, resetController, userController } = require('../controllers/UserController')

// Routes
router.route('/signup').post(signupController);
router.route('/login').post(loginController);
router.route('/searchUser').get(searchUserController);
router.route('/reset').post(resetController);
router.route('/_id').get(userController);

// Exporting router
module.exports = router;