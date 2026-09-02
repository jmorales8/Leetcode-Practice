const target = 3
let array = [1, 2, 3, 5, 6, 7, 8, 9]
let right = array.length - 1;
let left = 0;

console.log(left, right)

while(left <= right) {
  // Calculate the middle index and round down
  let mid = Math.floor((left + right) / 2);
  console.log("beginning:", left, right, mid)

  // Check if the target is at the mid position
  if (array[mid] === target) {
      console.log(mid); // Target found, return its index
  }
  // If target is greater, ignore the left half
  if (array[mid] < target) {
      left = mid + 1;
  }
  // If target is smaller, ignore the right half
  else {
      right = mid - 1;
  }
  console.log("end:", left, right, mid)
}

return -1