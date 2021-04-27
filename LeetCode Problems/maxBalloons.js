// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.


var maxNumberOfBalloons = function(text) {
    
  let letters = {
      b: 0,
      a: 0,
      l: 0,
      o: 0,
      n: 0
  };
  
  for(let i=0; i<text.length; i++){
      
      if(text[i] === 'b') letters['b']++;
      if(text[i] === 'a') letters['a']++;
      if(text[i] === 'l') letters['l']++;
      if(text[i] === 'o') letters['o']++;
      if(text[i] === 'n') letters['n']++;
  }
  
  let min = letters['b'];
  
  for(let i=0; i<5; i++){
      let key = Object.keys(letters)[i];
      
      if(key === 'l' || key === 'o'){
          if(Math.floor(letters[key]/2) < min) min = Math.floor(letters[key]/2);
      } else if(letters[key] < min) min = letters[key];
  }
  
  return min;
  
};