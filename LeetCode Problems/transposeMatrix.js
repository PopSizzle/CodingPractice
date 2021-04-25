// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

var transpose = function(matrix) {
    
  let res = [];
  
  for(let i=0; i<matrix[0].length; i++){
      
      let row = [];
      
      for(let j=0; j<matrix.length; j++){
          row.push(matrix[j][i]);
      }
      
      res.push(row);
  }
  
  return res;
  
};