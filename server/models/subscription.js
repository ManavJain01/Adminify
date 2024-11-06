const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    subscription: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subscriptions", schema);
