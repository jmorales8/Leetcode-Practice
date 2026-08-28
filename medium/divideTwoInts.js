var divide = function(dividend, divisor) {
  let isNegative = 0;
  if(dividend < 0) isNegative = !isNegative
  if(divisor < 0) isNegative = !isNegative
  const dividingNumber = divisor
  let modulusCount = 0;

  while (Math.abs(divisor) <= Math.abs(dividend)) {
    divisor += dividingNumber;
    modulusCount += 1
  }
  if((-modulusCount) < -2147483648) {
    return -2147483648
  } else if (modulusCount > 2147483647) {
    return 2147483647
  }
  return isNegative ? -modulusCount : modulusCount
};

console.log(divide(7,-3))
console.log(divide(10,3))
console.log(divide(-15,-3))
console.log(divide(-25,7))
console.log(divide(2147483647, 1))