const express = require("express");
const router = express.Router();

router.route("/categories").get();

module.exports = router;
