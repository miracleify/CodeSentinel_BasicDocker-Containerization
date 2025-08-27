// controllers/bmiControllers.js
exports.calculateBMI = (req, res) => {
  const { weight, height } = req.query;

  if (!weight || !height) {
    return res.status(400).json({ error: "Weight and height are required" });
  }

  const bmi = (weight / (height * height)).toFixed(2);

  res.json({
    weight,
    height,
    bmi,
    status:
      bmi < 18.5 ? "Underweight" :
      bmi < 24.9 ? "Normal weight" :
      bmi < 29.9 ? "Overweight" :
      "Obese"
  });
};
