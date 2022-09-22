const { Schema, model } = require("mongoose");

const SourceMediaSchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  idchanneltype: {
    type: Number,
    required: true,
  },
});

module.exports = model("SourceMedia", SourceMediaSchema, "sourcemedia");
