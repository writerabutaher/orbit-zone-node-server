const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    console.log("MongoDB is connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
