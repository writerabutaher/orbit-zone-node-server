const express = require("express");
const router = express.Router();
const {
  getAllCars,
  getACar,
  createCar,
  updateCar,
  deleteCar,
  advertiseCar,
  getAdvertisedCars,
  getCarsByCategory,
} = require("../controllers/carController");
const validateCar = require("../middleware/validateCarInfo");

router.get("/", getAllCars);
router.get("/:id", getACar);
router.post("/", validateCar, createCar);
router.put("/:id", validateCar, updateCar);
router.put("/advertise/:id", advertiseCar);
router.get("/advertise", getAdvertisedCars);
router.delete("/:id", deleteCar);
router.get("/category/:id", getCarsByCategory);

module.exports = router;
