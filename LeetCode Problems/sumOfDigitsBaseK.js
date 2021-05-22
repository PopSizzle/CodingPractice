var sumBase = function(n, k) {
    
  let num = 0;
  
  // 10000
  // 

  while(n >= k){
      let power = Math.floor(Math.log(n)/Math.log(k));
      
      n -= Math.pow(k,power);
      
      num += Math.pow(10,power);
  }
  
  num += n;
  
  let str = num.toString();
  
  let sum = 0;
  
  for(let i=0; i<str.length; i++){
      sum += parseInt(str[i]);
  }
  
  return sum;
};

console.log(sumBase(42,2));