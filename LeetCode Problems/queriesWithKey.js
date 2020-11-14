// Given the array queries of positive integers between 1 and m, you have to process all queries[i] (from i=0 to i=queries.length-1) according to the following rules:

// In the beginning, you have the permutation P=[1,2,3,...,m].
// For the current i, find the position of queries[i] in the permutation P (indexing from 0) and then move this at the beginning of the permutation P. Notice that the position of queries[i] in P is the result for queries[i].
// Return an array containing the result for the given queries.

var processQueries = function(queries, m) {
  //     I will iterate through the queries array
  //     for each element, I will find where that element is in P
  //     I will push this value into the output
  //     Then I will move 3 to the beginning of P
      let output = [];
      
      let p = [];
      
      for(let i=1; i<=m; i++){
          p.push(i);
      }
      
      for(let i=0; i<queries.length; i++){
          let n = p.indexOf(queries[i]);
          
          output.push(n);
          
          let removed = p.splice(n, 1);
          
          p.unshift(removed[0]);
          
          console.log(p);
      }
      
      return output;
  };