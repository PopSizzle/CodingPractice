// You have a bomb to defuse, and your time is running out! Your informer will provide you with a circular array code of length of n and a key k.

// To decrypt the code, you must replace every number. All the numbers are replaced simultaneously.

var decrypt = function(code, k) {
    
  let newCode = [];
  
      if(k === 0){
          for(let i=0; i<code.length;i++){
              newCode.push(0);
          }
      } else{
          
          for(let i=0; i<code.length; i++){
              
              let sum = 0;
              
              for(let j=1; j<=Math.abs(k); j++){
       
                  let index;
                  
                  if(k < 0) index = i - j;
                  else index = i + j;
                  
                  if(index < 0) index += code.length;
                  
                  if(index >= code.length) index -= code.length;
                  
                  sum += code[index];
              }
              
              newCode.push(sum);
          }
      }            
  
  return newCode;
                  
};