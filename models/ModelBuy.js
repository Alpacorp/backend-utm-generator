const { Schema, model } = require("mongoose");

const ModelBuySchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  shortname: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("ModelBuy", ModelBuySchema, "modelbuy");
