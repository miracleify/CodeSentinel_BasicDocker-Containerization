function calculateBMI(weight, height) {
    if (height <= 0) throw new Error("Height must be greater than zero");
    return weight / (height * height);
  }
  
  module.exports = calculateBMI;
  