const convertToCelsius = function(tempF) {
  return roundToOneDecimal((tempF - 32) * (5 / 9));
};

const convertToFahrenheit = function(tempC) {
  return roundToOneDecimal(tempC * (9 / 5) + 32);
};

function roundToOneDecimal(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
