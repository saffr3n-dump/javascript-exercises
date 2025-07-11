const removeFromArray = function(array, ...removedValues) {
  return array.filter((v) => !removedValues.includes(v));
};

// Do not edit below this line
module.exports = removeFromArray;
