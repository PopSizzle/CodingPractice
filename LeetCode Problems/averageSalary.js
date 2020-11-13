// Given an array of unique integers salary where salary[i] is the salary of the employee i.

// Return the average salary of employees excluding the minimum and maximum salary.

var average = function(salary) {
  if(salary.length === 0){
      return 0
  }
  
  if(salary.length === 1){
      return salary[0];
  }
  
  
  let sum = salary[0];
  
  let max = salary[0];
  
  let min = salary[0];
  
  for(let i=1; i<salary.length; i++){
      sum += salary[i]
      
      if(salary[i] < min){
          min = salary[i];
      }
      
      if(salary[i] > max){
          max = salary[i];
      }
  }
  
  return (sum-min-max)/(salary.length - 2);
};