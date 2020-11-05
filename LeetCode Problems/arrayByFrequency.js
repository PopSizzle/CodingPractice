// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

var frequencySort = function(nums) {
    
  let tracker = {}
  
  for(let i=0; i<nums.length; i++){
      
      if(!tracker[nums[i]]){
          tracker[nums[i]] = 1;
      } else {
          tracker[nums[i]] ++;
      }
  }
  
  let keys = Object.keys(tracker);
  
  for(let i=0; i<keys.length); i++){
      
  }
};