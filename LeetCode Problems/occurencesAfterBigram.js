var findOcurrences = function(text, first, second) {
  //     Create an array to store our results
      let res = [];
      
  //     split text into an array of words
      text = text.split(' ');
      
  //     create trackers to remember if we have seen the first and second words
      let seen1st = false;
      
      let seen2nd = false;
      
  //     iterate through the array of words
      for(let i=0; i<text.length; i++){
          
  //     If first has not been seen, check if the word is the same as 'first'
          if(!seen1st && text[i] === first){
                  seen1st = true;
              
  //     If first word has been seen, check for second word
          } else if(seen1st && !seen2nd && text[i] === second){
              seen2nd = true;
              
  //     If both have been seen, add the current word to the res array and reset seen1st and seen2nd
          } else if(seen1st && seen2nd){
              res.push(text[i]);
              
              if(text[i] === first) seen1st = true;
              else seen1st = false;
              seen2nd = false;
              
  //     In any other case, reset both seen variables to false;
          } else{
              if(text[i] === first) seen1st = true;else seen1st = false;
              seen2nd = false;
          }
      }
      
      return res;
      
  };