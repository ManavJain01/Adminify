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
  company:{
    type: String,
  },
  owner:{
    type: String,
  },
  age:{
    type: Number
  },
  gender:{
    type: String
  },
  address:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now()
  }
}, {timestamps: true})

module.exports = mongoose.model('users', UserSchema)