const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// save the user
const saveUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;

  const user = await User.create({
    name,
    email,
    role: "user",
  });

  res.status(201).json(user);
});

// get all users
const allUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// get user by email
const singleUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.email);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});

module.exports = {
  singleUser,
  allUsers,
  saveUser,
};
