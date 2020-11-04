// Given a string S of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.

var minAddToMakeValid = function(S) {

  let count = 0;
  
  if(S === ''){
      return count;
  }
  
  let open = 0;
  
  for(let i=0; i<S.length; i++){
      if(S[i] === ')'){
          if(open === 0){
              count ++
          } else{
              open --;
          }
      } else{
          open ++;
      }
  }
  
  count += open;
  
  return count;
};