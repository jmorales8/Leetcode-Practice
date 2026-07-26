var threeSum = function (nums) {
  const savedArrays = [[]]
  nums.sort((a, b) => a - b)
  console.log(nums)
  for (let i = 0; i < nums.length; i++) {
    left = i + 1;
    right = nums.length - 1;
    while(left + 1 != right || right - 1 != left) {
      if(Math.abs(0 - nums[left + 1]))

      if(nums[i] + nums[left] + nums[right] == 0) {
        savedArrays = [...savedArrays,[nums[i], nums[left], nums[right]] ]
      }
    }
  }
};
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
