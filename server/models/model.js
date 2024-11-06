const mongoose = require("mongoose");

const { Schema } = mongoose;

// const AdminSchema = new Schema(
//   {
//     fullName: {
//       type: String
//     },
//     phone: {
//       type: String
//     },
//     address: {
//       type: String
//     },
//     postalCode: {
//       type: String
//     }
//   }
// )

const schema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    adminId: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    paymentInfo: Object,
    subscription: {
      type: Object
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("companies", schema);
