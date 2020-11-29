var removeOuterParentheses = function(S) {
  let start = 0;
  let end;
  let answer = '';
  let left = 0;
  let right = 0;
  
  for(let i=0; i<S.length; i++){
      
      if(S[i] === '('){
          left++;
      } else{
          right ++
      }
      
      if(S[i] === ')' && left === right){
          end = i
          let string = S.slice(start,end + 1);
          console.log(string);
          answer += string.slice(1, string.length-1);
          start = i+1;
      }
  }
  
  return answer;
};