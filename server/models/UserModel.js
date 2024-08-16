const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({
  name:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  },
  privilege:{
    type: String,
    required: true
  },
  age:{
    type: Number
  },
  gender:{
    type: String
  },
  address:{
    type: String
  }
}, {timestamps: true})

module.exports = mongoose.model('users', UserSchema)