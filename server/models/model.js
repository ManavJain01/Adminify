const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    // logo:{
    //   data: Buffer,
    //   contentType: String,
    // }
    logo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("website_details", schema);
