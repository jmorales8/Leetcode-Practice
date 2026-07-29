

let nums = [-1, 0, 1, 2, -1, -4];
let savedArrays = [];

nums.sort((a, b) => a - b);

for (let i = 0; i < nums.length - 2; i++) {
  // Skip duplicate fixed values
  if (i > 0 && nums[i] === nums[i - 1]) {
    continue;
  }

  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[i] + nums[left] + nums[right];

    if (sum === 0) {
      savedArrays.push([nums[i], nums[left], nums[right]]);

      left++;
      right--;

      // Skip duplicate left values
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }

      // Skip duplicate right values
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(savedArrays);