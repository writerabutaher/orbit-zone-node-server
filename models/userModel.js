const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    role: {
      type: "String",
      required: true,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
