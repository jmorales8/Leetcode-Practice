var removeDuplicates = function (nums) {
  const nonDuplicatesArray = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    if (nonDuplicatesArray[nonDuplicatesArray.length - 1] != nums[i]) {
      nonDuplicatesArray.push(nums[i]);
    }
  }
  for (let i = 0; i < nonDuplicatesArray.length; i++) {
    nums[i] = nonDuplicatesArray[i];
  }
  return nonDuplicatesArray.length;
};

console.log(removeDuplicates([1, 1, 2]));
