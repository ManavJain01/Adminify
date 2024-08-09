// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Middleware
const { protectRoute } = require('../middleware/protectRoute')

// Importing Controllers
const { getMessages, sendMessage } = require('../controllers/MessageController')

// Routes
router.route('/:id').get(protectRoute, getMessages);
router.route('/send/:id').post(protectRoute, sendMessage);

// Exporting router
module.exports = router;