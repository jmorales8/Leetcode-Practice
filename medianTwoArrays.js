var findMedianSortedArrays = function(nums1, nums2) {
  let combinedArrays = [...nums1, ...nums2].sort()
  combinedArrays.sort((a, b) => a - b)
  console.log(combinedArrays)
  let median = 0;
  if(combinedArrays.length % 2 === 0) {
    median += (combinedArrays[(combinedArrays.length / 2) - 1] + combinedArrays[(combinedArrays.length / 2)]) / 2
  } else {
    median += combinedArrays[Math.floor(combinedArrays.length / 2)]
  }
  return median
};

console.log(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]))