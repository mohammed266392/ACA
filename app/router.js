const express = require("express");
const controller = require("./controler");

const router = express.Router();

router.get("/", controller.home);

module.exports = router;
