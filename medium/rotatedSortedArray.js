var search = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    if(target == nums[i]) {
      return i
    }
    nums = [...nums, nums[0]]
    nums.splice(0,1)
  }
  return -1
};

console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 0))