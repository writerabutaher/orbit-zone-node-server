const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: "String",
      required: true,
      unique: true,
    },
    email: {
      type: "String",
      required: true,
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
