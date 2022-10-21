const { Schema, model } = require("mongoose");

const SourceMediaSchema = Schema({
  name: {
    type: String,
    required: true,
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

module.exports = model("SourceMedia", SourceMediaSchema, "sourcemedia");
