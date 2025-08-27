// app.js
const express = require("express");
const app = express();

// Middleware
const logger = require("./middleware/logger");
app.use(logger);

// Parse JSON requests
app.use(express.json());

// Routes
const bmiRoutes = require("./routes/bmiRoutes"); // ✅ import routes
app.use("/bmi", bmiRoutes);

// Default health route
app.get("/", (req, res) => {
  res.send("BMI API is running...");
});

module.exports = app;
