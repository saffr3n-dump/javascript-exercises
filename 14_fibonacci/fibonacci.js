const fibonacci = function (n) {
  n = Number(n);
  if (n < 0) return "OOPS";
  let temp;
  let curr = 0;
  let next = 1;
  for (let i = 0; i < n; i++) {
    temp = curr + next;
    curr = next;
    next = temp;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
