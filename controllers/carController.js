const asyncHandler = require("express-async-handler");
const Car = require("../models/CarModel");

// Get all cars

const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
  console.log(cars);
  res.status(200).json(cars);
});

// Get a car by id

const getACar = asyncHandler(async (req, res) => {
  const car = await Car.findById(req.params.id);
  if (!car) {
    res.status(404);
    throw new Error("Car not found");
  }
  res.status(200).json(car);
});

// Create a car

const createCar = asyncHandler(async (req, res) => {
  const {
    company,
    model,
    year,
    price,
    description,
    seller_info: { name, phone },
    category_id,
    photo,
    condition,
  } = req.body;

  const car = await Car.create({
    company,
    model,
    year,
    price,
    description,
    seller_info: { name, phone },
    category_id,
    photo,
    condition,
  });
  res.status(201).json(car);
});

// update car info

const updateCar = asyncHandler(async (req, res) => {
  const carId = req.params.id;
  const updatedCarData = req.body;

  const updatedCar = await Car.findByIdAndUpdate(carId, updatedCarData, {
    new: true,
  });

  if (!updatedCar) {
    res.status(404);
    throw new Error("Car not found");
  }

  res.status(200).json(updatedCar);
});

// delete car

const deleteCar = asyncHandler(async (req, res) => {
  const deletedCar = await Car.findByIdAndDelete(req.params.id);
  if (!deletedCar) {
    res.status(404);
    throw new Error("Car not found");
  }
  res.status(200).json(deletedCar);
});

module.exports = {
  getAllCars,
  getACar,
  createCar,
  updateCar,
  deleteCar,
};
