// Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

// Return the sorted array.

var frequencySort = function(nums) {
    
  const result = [];
  
  let tracker = {}
  
  for(let i=0; i<nums.length; i++){
      
      if(!tracker[nums[i]]){
          tracker[nums[i]] = 1;
      } else {
          tracker[nums[i]] ++;
      }
  }
  
  let entries = Object.entries(tracker);
  
  entries.sort(function(a,b){ return a[1]-b[1] });
  
  for(let i=0; i<entries.length; i++){
      
      for(let j=0; j<entries[i][1]; j++){
          result.push(entries[i][0])
      }
  }
  
  return result;
};