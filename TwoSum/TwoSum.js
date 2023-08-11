var twoSum = function(nums, target) {
//   nums = ;
  output = [];
//   target = 9;
  let i = 0;
  let j = 0;
  while (i < nums.length)
  {
      while (j < nums.length)
      {
          if (((nums[i] + nums[j]) == target) && (i != j))
            {
                output.push(i);
                output.push(j);
                // break;
            }
          j++;
      }
      j = i+1;
      i++;
  }  
  return (output);
};
console.log(twoSum([2,7,11,15], 9));