const { Schema, model } = require("mongoose");

const AudienceSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  shortname: {
    type: String,
    required: [true, "The shortname is required"],
    unique: true,
  },
});

module.exports = model("Audience", AudienceSchema);
