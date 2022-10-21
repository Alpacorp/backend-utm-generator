const { Schema, model } = require("mongoose");

const StrategySchema = Schema({
  name: {
    type: String,
    required: true,
  },
  shortname: {
    type: String,
    required: true,
    unique: [true, "The shortname must be unique"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Strategy", StrategySchema, "strategy");
