// Given an array nums of 0s and 1s and an integer k, return True if all 1's are at least k places away from each other, otherwise return False.

var kLengthApart = function(nums, k) {
    
  let one = false;
  let distance = 0;
  
  for(let n of nums){
      
      if(n === 1){
          
          if(one && distance < k) return false;
          
          if(!one) one = true;
          
          distance = 0;
          
      }else distance++;
  }
  
  return true;
  
};