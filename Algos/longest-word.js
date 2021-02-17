// Write code to create a function that accepts a string (`str`) and returns the longest word in the string

var longestWord = function(str) {
  const words = str.split(' ');
  
  console.log(words);

  let longest = '';

  for(let i=0; i<words.length; i++){
    if(words[i].length > longest.length){
      longest = words[i]
    }
  }

  return longest;
};
