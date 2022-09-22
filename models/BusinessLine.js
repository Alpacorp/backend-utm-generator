const { Schema, model } = require("mongoose");

const BusinessLineSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
  },
  shortname: {
    type: String,
    required: [true, "The shortname is required"],
  },
});

module.exports = model("BusinessLine", BusinessLineSchema, "businessline");
