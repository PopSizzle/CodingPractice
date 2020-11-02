// A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same. More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.

// For example, these are arithmetic sequences:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// The following sequence is not arithmetic:

// 1, 1, 2, 5, 7
// You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]]. All the arrays are 0-indexed.

// Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence, and false otherwise.

var checkArithmeticSubarrays = function(nums, l, r) {
    
  const results = [];
  
  const checkArith = (array) => {
          
      if(array.length <= 2){
          return true
      } else {
      
          const sorted = array.sort(function(a,b){return a-b});
      
          const diff = sorted[1] - sorted[0];
      
          for(let i = 2; i<sorted.length; i++){
              if(sorted[i] - sorted[i-1] !== diff){
                      return false
              }       
          }
              
          return true
      }
  }
  
  for(let i=0; i<l.length; i++){
      
      const subArray = [];
      
      for(let j=l[i]; j<=r[i]; j++){
          subArray.push(nums[j])
      }
      
      results.push(checkArith(subArray))
  }
  
  return results;
};