const { Schema, model } = require("mongoose");

const AudienceSchema = Schema({
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

module.exports = model("Audience", AudienceSchema, "audience");
