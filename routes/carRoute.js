const express = require("express");
const router = express.Router();
const {
  getAllCars,
  getACar,
  createCar,
  updateCar,
  deleteCar,
} = require("../controllers/carController");
const validateCar = require("../middleware/validateCarInfo");

router.get("/", getAllCars);
router.get("/:id", getACar);
router.post("/", validateCar, createCar);
router.put("/:id", validateCar, updateCar);
router.delete("/:id", deleteCar);

module.exports = router;
