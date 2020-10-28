// Given the array nums, obtain a subsequence of the array whose sum of elements is strictly greater than the sum of the non included elements in such subsequence. 

// If there are multiple solutions, return the subsequence with minimum size and if there still exist multiple solutions, return the subsequence with the maximum total sum of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array. 

// Note that the solution with the given constraints is guaranteed to be unique. Also return the answer sorted in non-increasing order.

var minSubsequence = function(nums) {
  const sub = [];
  
  nums.sort(function(a,b){return b-a});
  
  console.log(nums);
  
  const adder = (sum, currVal) => sum + currVal;
  
  let total = nums.reduce(adder);
  
  let subSum = 0;
  
  for(let i=0; i<nums.length; i++){
      sub.push(nums[i]);
      
      subSum += nums[i];
      
      if(subSum > (total-subSum)){
          return sub;
      }
  }
  
};