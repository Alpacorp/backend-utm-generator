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
    unique: [true, "The shortname must be unique"],
  },
  idchanneltype: {
    type: Number,
    required: [true, "The idchanneltype is required"],
    unique: [true, "The idchanneltype must be unique"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Channel", ChannelSchema, "channel");
