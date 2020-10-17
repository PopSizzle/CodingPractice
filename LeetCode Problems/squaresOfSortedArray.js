// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

var sortedSquares = function(A) {
  let squares = [];
  
  for(let i=0; i<A.length; i++) {
      squares.push(Math.pow(A[i], 2));
  }
  
  return squares.sort(function(a,b) {return a-b});
};