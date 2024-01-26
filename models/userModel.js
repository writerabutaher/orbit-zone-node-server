const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    orders: {
      type: String[]
    }
    cars: {
      type: String[],
    },
    wishlist: {
      type: String[],
    },
  },
  {
    Timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);
