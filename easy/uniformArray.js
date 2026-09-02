var uniformArray = function(nums1) {
  let nums2 = []
  //even check
  for(let i = 0; i < nums1.length; i++) {
    if(nums1[i] % 2 == 0) {
      nums2 = [...nums2, nums1[i]]
      console.log("adding at i level", nums2)
      continue;
    }
    for(let j = 0; j < nums1.length; j++) {
      if(i != j) {
        if((nums1[i] - nums1[j]) % 2 == 0) {
          console.log("adding at j level", nums2)
          nums2 = [...nums2, nums1[i] - nums1[j]]
          break;
        }
      }
    }
  }
  console.log(nums2, nums2.length, nums1.length)
  if(nums2.length == nums1.length ) return true

  // odd check
  nums2 = []
  for(let i = 0; i < nums1.length; i++) {
    if(nums1[i] % 2 != 0) {
      nums2 = [...nums2, nums1[i]]
      console.log("adding at i level", nums2)

      continue;
    }
    for(let j = 0; j < nums1.length; j++) {
      if(i != j) {
        if((nums1[i] - nums1[j]) % 2 != 0) {
          console.log("adding at j level", nums2)
          nums2 = [...nums2, nums1[i] - nums1[j]]
          break;
        }
      }
    }
  }
  console.log(nums2, nums2.length, nums1.length)
  if(nums2.length == nums1.length ) return true
  return false
};

console.log(uniformArray([1,3,5,7,9]))
console.log(uniformArray([23, 86]))
console.log(uniformArray([2,3]))
console.log(uniformArray([1,45,68]))