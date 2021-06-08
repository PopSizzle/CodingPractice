// Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

// Return how many groups have the largest size.

var countLargestGroup = function(n) {
    
  let arr = new Array(27);
  
  for(let i=1; i<=n; i++){
      let value = i;
      let sum = 0;
      
      while(value){
          sum += value % 10;
          value = Math.floor(value/10);
      }
      
      arr[sum-1] = ~~arr[sum-1] + 1;
  }
  
  arr.sort(function(a,b){
      return b-a;
  })

  let count = 0;
  
  for(let n of arr){
      if(n !== arr[0]) return count;
      else count++
  }
  
  return count;
};