const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdminSchema = new Schema(
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
    aadhaar: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("admins", AdminSchema);