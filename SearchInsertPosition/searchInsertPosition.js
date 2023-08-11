/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let i = 0;
    let index = 0;
    while (i < nums.length)
    {
        if (nums[i] < target)
            index = i; 
        i++;
    }
    if (nums[0] < target)
        index++;
    else 
        index = 0;
    return (index);
};
searchInsert([1,3,5,6,7,8,8], 5);