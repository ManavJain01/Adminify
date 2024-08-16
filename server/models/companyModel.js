const mongoose = require("mongoose");

// Define your schema
const companySchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  logo: {
    data: Buffer,
    contentType: String,
  },
});

// Create a model
module.exports = mongoose.model("company", companySchema);
