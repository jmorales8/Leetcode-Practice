var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

  const phoneLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function buildCombination(index, currentCombination) {
    // If we used every digit, the combination is complete
    if (index === digits.length) {
      result.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const letters = phoneLetters[currentDigit];

    // Try every letter belonging to the current digit
    for (const letter of letters) {
      buildCombination(index + 1, currentCombination + letter);
    }
  }

  buildCombination(0, "");

  return result;
};

console.log(letterCombinations("23"));