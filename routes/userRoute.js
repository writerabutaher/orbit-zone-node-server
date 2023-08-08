const express = require("express");
const {
  saveUser,
  allUsers,
  singleUser,
} = require("../controllers/userController");
const router = express.Router();

router.route("/users").post(saveUser).get(allUsers);
router.get("/user/:email", singleUser);
