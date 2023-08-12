const express = require("express");
const connectDB = require("./config/dbConnect");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
require("dotenv").config();

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/categories", require("./routes/categoryRoute"));
app.use("/cars", require("./routes/carRoute"));
app.use("/users", require("./routes/userRoute"));
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: `Server listening on port ${port}` });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
