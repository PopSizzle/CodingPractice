// We have an array nums of integers, and an array queries of queries.

// For the i-th query val = queries[i][0], index = queries[i][1], we add val to nums[index].  Then, the answer to the i-th query is the sum of the even values of A.

// (Here, the given index = queries[i][1] is a 0-based index, and each query permanently modifies the array nums.)

// Return the answer to all queries.  Your answer array should have answer[i] as the answer to the i-th query.

var sumEvenAfterQueries = function(nums, queries) {
    
  let output = [];
  
  for(let query of queries){
      let index = query[1];
      let val = query[0];
      
      nums[index] += val;
      
      output.push(nums.filter(num => num % 2 === 0).reduce(function(a,b){return a+b;},0))
  }
  
  return output;
  
};