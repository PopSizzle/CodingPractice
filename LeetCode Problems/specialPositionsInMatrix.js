// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

var numSpecial = function(mat) {
    
  let res = 0;
  
  for(let i=0; i<mat.length; i++){
      
      let ones = [];
      
      for(let j=0; j<mat[i].length; j++){
          
          if(mat[i][j]) ones.push(j);
          
          if(ones.length > 1) break;
          
      }
      
      if(ones.length === 1){
          
          let count = 0;
          
          for(let j=0; j<mat.length; j++){
              
              if(mat[j][ones[0]]) count ++;
              
              if(count > 1) break;
          }
          
          if(count === 1) res ++;
      }
  }
  
  return res;
};