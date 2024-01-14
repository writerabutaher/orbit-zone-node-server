const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");

// get all categories
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  if (!categories) {
    res.status(404);
    throw new Error("No categories found");
  }

  res.status(200).json(categories);
});

// create category
const createCategory = asyncHandler(async (req, res) => {
  const { name, image } = req.body;

  if ((!name, !image)) {
    res.status(404);
    throw new Error("Please enter a category name");
  }

  const category = await Category.create({ name, image });
  res.status(201).json(category);
});

// delete category
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  res.status(200).json(category);
});

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
};
