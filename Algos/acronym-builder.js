// Write code to create a function that accepts a string and returns an acronym for the given string

var acronymBuilder = function(str) {
  const words = str.split(' ');

  console.log(words);

  let acronym = '';

  for(let i=0; i<words.length; i++){

    let letter = words[i][0].toUpperCase();

    acronym += letter;
  }

  console.log(acronym);

  return acronym;
};