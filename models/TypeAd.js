const { Schema, model } = require("mongoose");

const TypeAdSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  shortname: {
    type: String,
    required: true,
  },
});

module.exports = model("TypeAd", TypeAdSchema, "typead");
