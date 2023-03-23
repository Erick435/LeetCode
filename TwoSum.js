// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]


//Test case 1:
nums1 = [2, 7, 11, 15];
target1 = 9;
//Expected: [0, 1]

//Test case 2: 
nums2 = [3, 2, 4];
target2 = 6;
//Expected: [1, 2]

//Test case 3: 
nums3 = [3, 3]
target3 = 6
//Expected: [0, 1]

var twoSum = function(nums, target) {
    var number = [];
    for(var i = 0; i <= nums.length; i++){
        for(var j = i + 1; j <= nums.length; j++){
            if (nums[i] + nums[j] == target){
                number.push(i)
                number.push(j);
                return number;
            }
        }
    }
};

console.log(twoSum(nums1, target1));

console.log(twoSum(nums2, target2));

console.log(twoSum(nums3, target3));