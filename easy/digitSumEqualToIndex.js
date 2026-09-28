var smallestIndex = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] < 10) {
      if(nums[i] == i) return i
    } else {
      let total = 0;
      let splitNum = Array.from(String(nums[i]), Number)
      splitNum.forEach(num => {
        total += num
      })
      if(total == i) {
        return i
      }
    }
  }
  return -1
};

console.log(smallestIndex([1,3,2]))

console.log(smallestIndex([1,10,11]))

console.log(smallestIndex([1,2,3]))