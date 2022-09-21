const { Schema, model } = require("mongoose");

const ModelBuySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  idchanneltype: {
    type: Number,
    required: true,
  },
});

module.exports = model("ModelBuy", ModelBuySchema, "modelbuy");