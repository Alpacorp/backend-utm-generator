const { Schema, model } = require("mongoose");

const ChannelSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
    unique: true,
  },
  shortname: {
    type: String,
    required: [true, "The shortname is required"],
  },
  idchanneltype: {
    type: Number,
    required: [true, "The idchanneltype is required"],
  },
});

module.exports = model("Channel", ChannelSchema, "channel");
