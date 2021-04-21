var uncommonFromSentences = function(A, B) {
    
  let res = [];
  
  let words = A.split(' ').concat(B.split(' '));
  
  words.sort();
  
  if(words[0] !== words[1]) res.push(words[0]);
  
  for(let i=1; i<words.length; i++){
      if(words[i] === words[i+1]) i++;
      else if(words[i] !== words[i-1]) res.push(words[i]);
  }
  
  return res;
  
};