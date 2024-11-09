const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    privilege: {
      type: String,
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Companies"
    },
    profile_img: {
      type: String
    },
    birthday: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    address: {
      type: String,
    },
    join_date: {
      type: String,
    },
    payment: {
      type: Number,
    },
    aadhaar: {
      type: Number,
    },
    subscription: {
      name: String,
      date: String,
      duration: Number,
    },
    subscribed_on: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);
