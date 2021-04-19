var isToeplitzMatrix = function(matrix) {

  console.log(matrix);
        
  const diagCheck = (m,n) => {
  
      let vals = new Set();
      
      let j=n;
      
      for(let i=m; i<matrix.length && j<matrix[0].length; i++){
          
          vals.add(matrix[i][j]);

          if(vals.size > 1){
              return false;
          }
          
          j++;
      }
      return true;
  }
  
  for(let i=0; i<matrix[0].length; i++){
      if(!diagCheck(0,i)){
          return false;
      }
  }
  
  for(let i=0; i<matrix.length; i++){
      if(!diagCheck(matrix[i][0])){
          return false;
      }
  }
  
  return true;
  
};

let matrix = [[1,2],[2,2]];

isToeplitzMatrix(matrix);