// Given two positive integers n and k.

// A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

var kthFactor = function(n, k) {
  let factors = [1];
  
  for(let i=2; i<=n/2; i++){
      if(n%i === 0){
          factors.push(i)
      }
  }
  
  factors.push(n);
  
  if(factors[k-1]){
      return factors[k-1];
  } else {
      return -1;
  }
};