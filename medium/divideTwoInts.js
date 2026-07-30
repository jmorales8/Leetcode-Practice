var divide = function(dividend, divisor) {
  if((dividend/divisor) < (2**31) * -1) {
    return (2**31) * -1
  } else if ((dividend/divisor) > (2**31) - 1) {
    return (2**31) - 1
  }
  let modulusCount = 1;

  while (divisor < dividend){
    divisor += divisor;
    modulusCount += 1
  }
  return modulusCount
};

console.log(divide(7,-3))
console.log(divide(10,3))