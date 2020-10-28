// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

var luckyNumbers  = function(matrix) {
    
  const lucky = [];
  
  const minInRow = (row) => {
      let min = row[0];
      let index = 0;
      
      for(let i=1; i<row.length; i++){
          if(row[i] < min){
              min = row[i];
              index = i;
          }
      }
      return [min, index];
  }
  
  const isMaxInCol = (row, index) => {
      for(let i = 0; i<matrix.length; i++){
          if(matrix[i][index] > matrix[row][index]){
              return false;
          }
      }
      
      return true;
  }
  
  for(let i=0; i<matrix.length; i++){
      let target = minInRow(matrix[i]);
      let num = target[0]
      let index = target[1];
      
      if(isMaxInCol(i, index)){
          lucky.push(num);
      }
  }
  
  return lucky;
};