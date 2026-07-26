var reverse = function(x) {
  let isNegative = x < 0;
  x = x.toString()
  const xlength = x.toString().length

  let nums = Array.from({ length: xlength }, () => "");
  for(let i = 0; i < xlength; ++i) {
    nums[i] += x[xlength - (i == 0 ? 1: i + 1)];
  }
  if(nums[0] == "0") nums.slice(1);
  reversedNum = parseInt(nums.join(""));
  if(reversedNum < (2**31) * -1 || reversedNum > 2**31-1) return 0
  return isNegative ? reversedNum * -1 : reversedNum;
};

console.log(reverse(1534236469))