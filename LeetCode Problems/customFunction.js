// Given a function  f(x, y) and a value z, return all positive integer pairs x and y where f(x,y) == z.

// The function is constantly increasing, i.e.:

// f(x, y) < f(x + 1, y)
// f(x, y) < f(x, y + 1)
// The function interface is defined like this: 

// interface CustomFunction {
// public:
//   // Returns positive integer f(x, y) for any given positive integer x and y.
//   int f(int x, int y);
// };
// For custom testing purposes you're given an integer function_id and a target z as input, where function_id represent one function from an secret internal list, on the examples you'll know only two functions from the list.  

// You may return the solutions in any order.

var findSolution = function(customfunction, z) {
    
  const answers =[];
  
  for(let i=1; i<=1000; i++){
      for(j=1; j<=1000; j++){
          if(customfunction.f(i,j) == z){
              answers.push([i,j])
          }
      }
  }
  
  return answers;
};