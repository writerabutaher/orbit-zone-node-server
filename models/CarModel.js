const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    seller_info: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      number: { type: String, required: true },
      address: { type: String, required: true },
    },
    company: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    condition: { type: String, required: true },
    advertise: { type: Boolean, required: true },
    category_id: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
