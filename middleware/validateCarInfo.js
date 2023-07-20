function validateCarInfo(req, res, next) {
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

  if (
    !company ||
    !model ||
    !year ||
    !price ||
    !description ||
    !name ||
    !phone ||
    !category_id ||
    !photo ||
    !condition
  ) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  next();
}

module.exports = validateCarInfo;
