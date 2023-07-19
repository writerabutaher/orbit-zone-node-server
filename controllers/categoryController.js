const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

// get all categories | api: '/categories'
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.status(200).json(categories);
});

// post category | api: '/categories
const postCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  console.log(req.body);
  if (!name) {
    res.status(400);
    throw new Error("Please enter a category name");
  }
  const category = await Category.create(req.body);
  res.status(201).json(category);
});
