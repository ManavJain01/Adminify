const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
    },
    products: {
      type: Array,
      required: true,
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Companies"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", schema);