const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    seller_info: {
      name: { type: String, required: true },
      phone: { type: String, required: true },
    },
    category_id: { type: String, required: true },
    photo: { type: String, required: true },
    condition: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
