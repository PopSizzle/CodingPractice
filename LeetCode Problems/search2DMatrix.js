// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true
var searchMatrix = function(matrix, target) {
  if(matrix.length <=0){
      return false;
  }
  
  let zone = null;
  
  for(let i=0; i<matrix.length; i++){
      if(matrix[i].length > 0){
      let max = matrix[i][matrix[i].length-1];
      
      let min = 0;
          
      if(matrix[i+1]){
          if(matrix[i+1].length > 0){
          min = matrix[i+1][0];
          }
      }
          
      if(target>max && target<min){
          return false;
      } else if(target<=max){
          zone = matrix[i];
          break;
      }
      }
  }
  
  if(!zone){
      return false;
  }
  
  for(let i=0; i<zone.length; i++){
      if(target === zone[i]){
          return true;
      }
  }
  
  return false;
};