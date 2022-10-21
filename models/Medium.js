const { Schema, model } = require("mongoose");

const MediumSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: [true, "The name must be unique"],
  },
  idchanneltype: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Medium", MediumSchema, "medium");
