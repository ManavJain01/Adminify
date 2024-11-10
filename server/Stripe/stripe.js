// Customers Models
const companyModel = require("../models/model.js");
const userModel = require("../models/UserModel.js");
const subscriptionModel = require("../models/subscription.js");

// Json Web Token
const jwt = require("jsonwebtoken");

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const client = process.env.ClientLocation;

const makePayment = async (req, res) => {
  try {
    const { cart, company } = req.body;
    const id = req.user._id;

    // Company Creation
    const newCompany = await companyModel.findOneAndUpdate(
      { adminId: id },
      {
        $set: {
          company: company.companyDetails.company,
          owner: company.companyDetails.owner,
          // logo: img || "",
          adminId: id,
          paymentInfo: company.personalDetails,
          subscription: cart,
        },
      },
      {
        new: true, // Return the updated document
        upsert: true, // Create a new document if none is found
        setDefaultsOnInsert: true, // Apply default values when creating
      }
    );

    const user = await userModel.findByIdAndUpdate(
      {_id: id},
      {
        $set: {
          companyId: newCompany._id,
          privilege: "admin"
        }
      }
    );
    

    // Stripe Integration
    const lineItems = cart.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product?.headline,
        },
        unit_amount: product.value * 100,
      },
      quantity: 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${client}/paymentSuccessful`,
      cancel_url: `${client}/paymentSuccessful`,
    });

    res.status(200).send({ sessionId: session.id });
  } catch (error) {
    console.error("Error in service::makePayment: ", error.message);
    res.status(400).send(error.message);
  }
};

// Exporting controllers
module.exports = { makePayment };
