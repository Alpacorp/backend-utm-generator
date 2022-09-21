const { Schema, model } = require("mongoose");

const ModelBuySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  shortname: {
    type: String,
    required: true,
  },
});

module.exports = model("ModelBuy", ModelBuySchema);
