let nums = [-1, 0, 1, 2, -1, -4];
let savedArrays = []
nums.sort((a, b) => a - b)
console.log(nums)
for (let i = 0; i < nums.length; i++) {
  left = i + 1;
  right = nums.length - 1;
  console.log("beginning of loop:", i, "left", left, "right", right)
  console.log("saved arrays:", savedArrays)
  while (left + 1 <= right || right - 1 >= left) {
    const sum = nums[i] + nums[left] + nums[right]
    if (nums[i] + nums[left] + nums[right] == 0) {
      savedArrays = [...savedArrays, [nums[i], nums[left], nums[right]]];
    } else if (sum < 0) {
      if(nums[i] + nums[left + 1] + nums[right] < nums[i] + nums[left] + nums[right - 1]) {
        right += 1
      } else {
        left += 1
      }
    } else {
      if(nums[i] + nums[left + 1] + nums[right] > nums[i] + nums[left] + nums[right - 1]) {
        right += 1
      } else {
        left += 1
      }
    }
  }
}
console.log(savedArrays)

/*


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
*/