const asyncHandler = require("express-async-handler");
const Car = require("../models/carModel");

// Get all cars
const getAllCars = asyncHandler(async (req, res) => {
  const cars = await Car.find();
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

// Get cars by category
const getCarsByCategory = asyncHandler(async (req, res) => {
  const category_id = req.params.id;

  const cars = await Car.find({ category_id });

  if (!cars) {
    res.status(404);
    throw new Error("Cars not found");
  }

  res.status(200).json(cars);
});

// Create a car
const createCar = asyncHandler(async (req, res) => {
  const car = await Car.create(req.body);
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

// advertise car
const advertiseCar = asyncHandler(async (req, res) => {
  const carId = req.params.id;
  const { advertise } = req.body;
  const advertiseCar = await Car.findByIdAndUpdate(
    carId,
    { advertise },
    { new: true }
  );

  if (!advertiseCar) {
    res.status(404);
    throw new Error("Car not found");
  }

  res.status(200).json(advertiseCar);
});

// get advertised cars
const getAdvertisedCars = asyncHandler(async (req, res) => {
  const advertisedCars = await Car.find({ advertise: true });

  if (!advertisedCars) {
    console.log("No advertised cars");
    res.status(404);
    throw new Error("No advertised cars found");
  }

  res.status(200).json(advertisedCars);
});

module.exports = {
  getAllCars,
  getCarsByCategory,
  getACar,
  createCar,
  updateCar,
  deleteCar,
  advertiseCar,
  getAdvertisedCars,
};
