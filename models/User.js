const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is required"],
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    unique: true,
  },
  role: {
    type: String,
    required: [true, "The role is required"],
  },
  password: {
    type: String,
    required: [true, "The password is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("User", UserSchema, "user");
