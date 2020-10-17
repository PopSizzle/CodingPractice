// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

var uniqueOccurrences = function(arr) {
  let tracker = {};
  
  for(let i=0; i<arr.length; i++){
      if(tracker[arr[i]]){
          tracker[arr[i]] ++;
      } else{
          tracker[arr[i]] = 1;
      }
  }
  
  let vals = Object.values(tracker);
  
  tracker = {};
  
  for(let i=0; i<vals.length; i++){
      if(!tracker[vals[i]]){
          tracker[vals[i]] = true;
      } else{
          return false;
      }
  }
  
  return true;
};