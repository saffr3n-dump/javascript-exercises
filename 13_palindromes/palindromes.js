const palindromes = function (string) {
  const importantChars = string
    .toLowerCase()
    .split("")
    .filter((c) => /[a-z0-9]/.test(c));
  const reversed = importantChars.toReversed();
  return importantChars.join("") === reversed.join("");
};

// Do not edit below this line
module.exports = palindromes;
