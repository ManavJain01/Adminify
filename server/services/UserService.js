// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Importing Configuration files
const { cloudinary } = require('../conf/cloudinary')

// Importing Models
const Model = require("../models/UserModel");
const AdminModel = require("../models/AdminModel");
const ProductModel = require("../models/productModel");
const SubscriptionModel = require("../models/subscription");
const { default: mongoose } = require("mongoose");

// Check Whether username exist or not
const checkUsername = async (userName) => {
  if(await Model.findOne({ userName })) return true;
  else return false;
}

// Create A Unique Username
const generateUniqueUserName = async (baseUserName) => {
  let userName = baseUserName;
  let counter = 1;

  while (await checkUsername(userName)) {
    userName = `${baseUserName}${counter++}`; // Append a number to the base username
  }

  return userName;
}

// Creating Admin
const createAdmin = async (data) => {
  try {
    const newAdmin = await Model.create({
      name: data.fullName,
      username: data.userName,
      email: data.email,
      password: data.password,
      privilege: "admin",
    });

    const authToken = jwt.sign(newAdmin._id.toString(), jwtSecret);
    return { authToken: authToken };
  } catch (error) {
    throw error;
  }
};

// Creating Admin
const createUser = async (data, img) => {
  try {
    if(img){
      data.profile_img = profile_img.secure_url;
      const profile_img = await cloudinary.uploader.upload(img?.path);
      
      // Delete the file from local storage
      fs.unlink(img.path, (err) => {
        if (err) {
          console.error("Error deleting the file:", err);
          return;
        }
      });
    }

    const newUser = await Model.create(data);
    const authToken = jwt.sign(newUser._id.toString(), jwtSecret);
    return { authToken: authToken };
  } catch (error) {
    throw error;
  }
};

const putUser = async (data, img, companyId) => {  
  if(img?.path){
    const profile_img = await cloudinary.uploader.upload(img?.path);
    data.profile_img = profile_img.secure_url;
    
    // Delete the file from local storage
    fs.unlink(img.path, (err) => {
      if (err) {
        console.error("Error deleting the file:", err);
        return;
      }
    });
  }

  // const ObjId = new mongoose.Types.ObjectId(data._id);
  // delete data._id;
  if(data["add-him"] === "yes") data.companyId = companyId;
  else if(data["add-him"] === "no"){
    delete data.companyId;
    
    await Model.updateOne({ _id: data._id }, { $unset: { companyId: "" } },
      { runValidators: true }
    );
  }

  if(data["add-him"]) delete data["add-him"];
  
  try {
    const result = await Model.updateOne({ _id: data._id }, data, {
      runValidators: true,
    });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  const objId = new mongoose.Types.ObjectId(id);
  try {
    const result = await Model.deleteOne({ _id: objId });
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

// SignUp
const signup = async (data) => {
  try {    
    const { userName, fullName, email, password, signupAs } = data;

    const privilege = signupAs === "admin" ? "admin" : "user"
    
    let user = await Model.findOne({
      $or: [{ userName }, { email }],
    });

    if (user === null) {
      user = await Model.create({
        name: fullName,
        username: userName,
        email: email,
        password: password,
        privilege: privilege,
      });

      const authToken = jwt.sign(user._id.toString(), jwtSecret);
      return { authToken: authToken };
    } else {
      throw new Error("User Already exist!!!");
    }
  } catch (error) {
    console.log("Error Occurred while Signing Up:", error.message);
    throw error;
  }
};

// Login
const login = async (data) => {
  try {
    const { name, password } = data;

    let user = await Model.findOne({ $or: [{ username: name }, { email: name }] })
      || await AdminModel.findOne({ $or: [{ username: name }, { email: name }] });

    if (user === null) {
      throw new Error("No User Found!!!");
    } else if (user && user.password === password) {
      const authToken = jwt.sign(user._id.toString(), jwtSecret);
      return { authToken: authToken };
    } else throw new Error("Password is Incorrect.");
  } catch (error) {
    console.log("Error Occurred while Logging In:", error.message);
    throw error;
  }
};

// Clerk Login
const clerkLoginService = async (data) => {
  const { email, fullName } = data;

  let user = await Model.findOne({ email: email })
    || await AdminModel.findOne({ email: email });

  if (user === null) {
    const baseUserName = email.split('@')[0]; // Use the part before the '@' in the email
    const userName = await generateUniqueUserName(baseUserName);

    user = await Model.create({
      name: fullName,
      username: userName,
      email: email,
      password: "clerk",
      privilege: "user",
    });

    const authToken = jwt.sign(user._id.toString(), jwtSecret);
    return { authToken: authToken };
  } else {
    const authToken = jwt.sign(user._id.toString(), jwtSecret);
    return { authToken: authToken };
  }
}

const userSearch = async (data) => {
  try {
    const { name } = data;
    let user = await Model.findOne({
      $or: [{ username: name }, { email: name }],
    }).select("email -_id");

    if (!user) throw new Error("User Not Found.");

    return { email: "Successful!!!" };
  } catch (error) {
    console.log("Error Occurred while Searching User:", error.message);
    throw error;
  }
};

const userReset = async (data) => {
  try {
    const { name, password } = data;

    await Model.updateOne(
      { $or: [{ username: name }, { email: name }] },
      { $set: { password: password } }
    );

    return { reset: "Successfull!!!" };
  } catch (error) {
    console.log("Error Occurred while Resetting Password:", error.message);
    throw error;
  }
};

const getUser = async (_id) => {
  try {
    const id = jwt.decode(_id);

    jwt.verify(_id, jwtSecret, (err, id) => {
      if (err) {
        throw new Error("Token verification failed:", err);
      }
    });

    return (user = await Model.findById(id).select(["-password"]));
  } catch (error) {
    console.log("Error Occurred while Fetching Error:", error.message);
    throw error;
  }
};

const allUsers = async (loggedInUserId, companyId) => {
  try {    
    const filteredUsers = await Model.find({
      _id: { $ne: loggedInUserId },
      companyId: companyId
    }).select("-password");

    return filteredUsers;
  } catch (error) {
    console.error("Error Occurred while Fetching All Users:", error.message);
    throw error;
  }
};

const userList = async (companyId) => {
  try {    
    const userlist = await Model.find({
      companyId: companyId
    });
    return userlist;
  } catch (error) {
    console.error("Error Occurred while Fetching All Users:", error.message);
    throw error;
  }
};

const productList = async (companyId) => {
  try {
    return await ProductModel.findOne({ companyId: companyId });

  } catch (error) {
    throw error;
  }
};

const createProduct = async (product, companyId) => {
  try {
    product._id = new mongoose.Types.ObjectId();

    let companyProducts = await ProductModel.findOne({ companyId: companyId });
    
    // If no product list is found, create a new one
    if (!companyProducts) {
      const newProduct = new ProductModel({
        products: [product],
        companyId: companyId,
      });
  
      // Save the document to the database
      await newProduct.save();
    } else {
      // If found, push the new product to the existing products array
      companyProducts.products.push(product);
      await companyProducts.save();
    }

    return "success";
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (ProductData) => {
  try {    
    const { companyId, product } = ProductData;
    
    if (!product?._id) {
      throw new Error("Product ID is required");
    }

    const productId = new mongoose.Types.ObjectId(product._id);
    const companyIdObject = new mongoose.Types.ObjectId(companyId);
    
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { companyId: companyIdObject, "products._id": productId }, // Match by companyId and product _id
      {
        $set: {
          "products.$": { ...product, _id: productId }, // Update the matching product in the array
        }
      },
      { new: true } // Return the modified document
    );
    
    if (!updatedProduct) {
      throw new Error("Product not found");
    }

    return "success";
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (productId, companyId) => {
  try {
    const productIdObject = new mongoose.Types.ObjectId(productId);
    const companyIdObject = new mongoose.Types.ObjectId(companyId);
    
    const updatedCompany = await ProductModel.findOneAndUpdate(
      { companyId: companyIdObject, "products._id": productIdObject }, // Find company by companyId and product's _id
      { $pull: { products: { _id: productIdObject } } }, // Remove the product from the array
      { new: true } // Return the updated company document
    );

    if (!updatedCompany) {
      throw new Error("Product or Company not found");
    }

    return "success";
  } catch (error) {
    throw error;
  }
};

const subscriptionList = async (companyId) => {
  try {
    return await SubscriptionModel.findOne({ companyId: companyId });

  } catch (error) {
    throw error;
  }
};

const createSubscription = async (subscription, companyId) => {
  try {
    product._id = new mongoose.Types.ObjectId();

    let companySubscriptions = await SubscriptionModel.findOne({ companyId: companyId });
    
    // If no product list is found, create a new one
    if (!companySubscriptions) {
      const newSubscription = new SubscriptionModel({
        subscriptions: [subscription],
        companyId: companyId,
      });
  
      // Save the document to the database
      await newSubscription.save();
    } else {
      // If found, push the new product to the existing products array
      companySubscriptions.subscriptions.push(subscription);
      await companySubscriptions.save();
    }

    return "success";
  } catch (error) {
    throw error;
  }
};

const updateSubscription = async (subscriptionData) => {
  try {    
    const { companyId, subscription } = subscriptionData;
    
    if (!subscription?._id) {
      throw new Error("Subscription ID is required");
    }

    const subscriptionId = new mongoose.Types.ObjectId(subscription._id);
    const companyIdObject = new mongoose.Types.ObjectId(companyId);
    
    const updatedSubscription = await SubscriptionModel.findOneAndUpdate(
      { companyId: companyIdObject, "subscriptions._id": subscriptionId }, // Match by companyId and subscription _id
      {
        $set: {
          "subscriptions.$": { ...subscription, _id: subscriptionId }, // Update the matching subscription in the array
        }
      },
      { new: true } // Return the modified document
    );
    
    if (!updatedSubscription) {
      throw new Error("Subscription not found");
    }

    return "success";
  } catch (error) {
    throw error;
  }
};

const deleteSubscription = async (subscriptionId, companyId) => {
  try {
    const subscriptionIdObject = new mongoose.Types.ObjectId(productId);
    const companyIdObject = new mongoose.Types.ObjectId(companyId);
    
    const updatedCompany = await SubscriptionModel.findOneAndUpdate(
      { companyId: companyIdObject, "products._id": subscriptionIdObject }, // Find company by companyId and subscription's _id
      { $pull: { subscriptions: { _id: subscriptionIdObject } } }, // Remove the subscription from the array
      { new: true } // Return the updated company document
    );

    if (!updatedCompany) {
      throw new Error("Subscription or Company not found");
    }

    return "success";
  } catch (error) {
    throw error;
  }
};


module.exports = {
  createAdmin,
  createUser,
  deleteUser,
  putUser,
  userList,
  signup,
  login,
  clerkLoginService,
  userSearch,
  userReset,
  getUser,
  allUsers,
  // Products
  productList,
  createProduct,
  updateProduct,
  deleteProduct,
  // subscription
  subscriptionList,
  createSubscription,
  updateSubscription,
  deleteSubscription
};
