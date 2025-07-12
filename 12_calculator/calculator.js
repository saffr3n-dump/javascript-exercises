const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (nums) {
  return nums.reduce((res, n) => res + n, 0);
};

const multiply = function (nums) {
  return nums.reduce((res, n) => res * n, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) return 1;
  let res = n;
  for (let i = n - 1; i > 0; i--) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
