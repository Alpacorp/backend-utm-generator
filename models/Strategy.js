const { Schema, model } = require("mongoose");

const StrategySchema = Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  shortname: {
    type: String,
    required: true,
  },
});

module.exports = model("Strategy", StrategySchema, "strategy");
