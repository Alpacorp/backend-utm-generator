const { Schema, model } = require("mongoose");

const MediumSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  idchanneltype: {
    type: Number,
    required: true,
  },
});

module.exports = model("Medium", MediumSchema, "medium");
