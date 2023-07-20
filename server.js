const express = require("express");
const connectDB = require("./config/dbConnect");
require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/categories", require("./routes/categoryRoute"));
app.use("/cars", require("./routes/carRoute"));
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: `Server listening on port ${port}` });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
