// routes/bmiRoutes.js
const express = require("express");
const router = express.Router();

const bmiController = require("../controllers/bmiController");

// define your routes
router.get("/", bmiController.calculateBMI);

module.exports = router;
