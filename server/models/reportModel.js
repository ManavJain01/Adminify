const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    user_logins: {
      type: Array,
      default: {}
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("reports", schema);