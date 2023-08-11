/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let index = 0;
    let arr = [];
    while (i < nums.length)
    {
        if (nums[i] == val)
            arr.push(i);
        i++;
    }
    i = 0;
    let j = 0;
    while (i < arr.length)
    {
        j = arr[i];
        j = j - i;
        nums.splice(j, 1);
        i++;
    }
    i = 0;
    while (i < nums.length)
        i++;
    return (i);
};
removeElement([0,1,2,2,3,0,4,2], 2);