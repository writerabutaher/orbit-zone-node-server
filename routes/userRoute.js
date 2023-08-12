const express = require("express");
const router = express.Router();
const {
  saveUser,
  allUsers,
  singleUser,
} = require("../controllers/userController");

router.route("/").post(saveUser).get(allUsers);
router.get("/:email", singleUser);

module.exports = router;
