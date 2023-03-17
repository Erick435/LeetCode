var runningSum = function (nums) {
    for (i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};

console.log("\n\n[" + runningSum([1, 2, 3, 4]) + "]") //Test case #1
//expected: [ 1, 3, 6, 10]
console.log("\n\n[" + runningSum([1, 1, 1, 1, 1]) + "]") // Test case #2
//Expected: [1, 2, 3, 4, 5]
console.log("\n\n[" + runningSum([3, 1, 2, 10, 1] + "]")) //Test case #3
//Expected: [3, 4, 6, 16, 17]