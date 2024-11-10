// Accessing Express Packages
const express = require("express");
const router = express.Router();

// Importing Middleware
const { protectRoute } = require("../middleware/protectRoute");

// Importing Controllers
const {
  createAdminController,
  createUserController,
  signupController,
  loginController,
  clerkLoginController,
  searchUserController,
  resetController,
  userController,
  allUsersController,
  userListController,
  putUserController,
  deleteUserController,
  userLoginsController,
  productListController,
  createProductController,
  putProductController,
  deleteProductController
} = require("../controllers/UserController");

// Routes
router.route("/createAdmin").post(createAdminController);
router.route("/signup").post(signupController);
router.route("/login").post(loginController);
router.route("/clerkLogin").post(clerkLoginController);
router.route("/searchUser").get(searchUserController);
router.route("/reset").post(resetController);
router.route("/_id").get(userController);
router.route("/users").get(protectRoute, allUsersController);
// Customers
router.route("/createUser").post(createUserController);
router.route("/update-user").put(protectRoute, putUserController);
router.route("/delete-user").delete(deleteUserController);
router.route("/user-list").get(protectRoute, userListController);

// Products
router.route("/product-list").get(protectRoute, productListController);
router.route("/create-product").post(protectRoute, createProductController);
router.route("/update-product").put(protectRoute, putProductController);
router.route("/delete-product").delete(protectRoute, deleteProductController);
// Reports
router.route("/fetchLogins").get(userLoginsController);


// Exporting router
module.exports = router;
