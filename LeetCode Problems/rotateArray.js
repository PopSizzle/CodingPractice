// Given an array, rotate the array to the right by k steps, where k is non-negative.

var rotate = function(nums, k) {
     
  for(let i=0; i<k; i++){
      let index = nums.length-1;
      console.log(index);
      
      let num = nums[index];
      
      nums.splice(index,1);
      console.log(nums);
      
      nums.unshift(num);
  }
  
  
};