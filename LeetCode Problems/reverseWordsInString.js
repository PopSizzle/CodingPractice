// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

var reverseWords = function(s) {
  const words = s.split(' ');
  
  for(let i=0; i<words.length; i++){
      words[i] = words[i].split('').reverse().join('');
  }
  
  return words.join(' ');
};