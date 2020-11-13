// Given an array target and an integer n. In each iteration, you will read a number from  list = {1,2,3..., n}.

// Build the target array using the following operations:

// Push: Read a new element from the beginning list, and push it in the array.
// Pop: delete the last element of the array.
// If the target array is already built, stop reading more elements.
// You are guaranteed that the target array is strictly increasing, only containing numbers between 1 to n inclusive.

// Return the operations to build the target array.

// You are guaranteed that the answer is unique.

var buildArray = function(target, n) {
    
  const answer = [];
  
  currIndex = 0;
  
  for(let i=0; i<n; i++){
      if(currIndex >= target.length){
          return answer
      }
      
      let num = i+1;
      
      if(target[currIndex] === num){
          answer.push('Push');
          currIndex ++;
      } else{
          answer.push('Push');
          answer.push('Pop')
      }
  }
  
  return answer;
  
};