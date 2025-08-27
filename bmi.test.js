const calculateBMI = require('./bmi');

test('calculates BMI correctly', () => {
  const bmi = calculateBMI(70, 1.75); // 70kg, 1.75m
  expect(bmi).toBeCloseTo(22.86, 2);
});

test('throws error for zero height', () => {
  expect(() => calculateBMI(70, 0)).toThrow("Height must be greater than zero");
});
