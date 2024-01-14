function validateCarInfo(req, res, next) {
  if (!req.body) {
    res.status(400);
    throw new Error("Please fill all fields");
  }
  next();
}

module.exports = validateCarInfo;
