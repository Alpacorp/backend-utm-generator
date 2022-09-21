const { Schema, model } = require("mongoose");

const ChannelSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  shortname: {
    type: String,
    required: [true, "The shortname is required"],
  },
});

module.exports = model("Channel", ChannelSchema);