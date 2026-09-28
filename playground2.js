var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        let middle = Math.floor((left + right) / 2)
        if(target > nums[left]) {

        } else
    }
};

const bruh = [4,5,6,7,0,1,2]
target = 4
console.log(bruh[0], bruh[Math.floor(bruh.length / 2)], bruh[bruh.length-1])
console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
