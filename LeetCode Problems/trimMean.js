var trimMean = function(arr) {
    
  let mult = arr.length/20;
  
  arr.sort((a,b) => a-b);

  console.log(arr);
  
  arr = arr.slice(mult,arr.length-mult);

  console.log(arr);
  
  let sum = arr.reduce((a,b) => a+b,0);

  console.log(sum, arr.length);
  
  return sum/arr.length;
  
};