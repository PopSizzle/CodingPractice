// Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

var canMakeArithmeticProgression = function(arr) {
  let sorted = arr.sort(function(a,b){return a-b});
  
  let diff = sorted[1] - sorted[0];
  
  for(let i=2; i<sorted.length; i++){
      if(arr[i] - arr[i-1] !== diff){
          return false;
      }
  }
  
  return true;
};