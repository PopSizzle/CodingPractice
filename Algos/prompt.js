
  //Instructions

  // Given a string and a character, create a function that returns the minimum distance between each character in the first argument and the single given character. 
  
  var string = "ilovetowritecode";
  var character = "o"
  
  function distanceFrom(str, char) {

    let spots = [];
    let answer = [];

    for(let i=0; i<str.length; i++){
      if(str[i] === char){
        spots.push(i);
      }
    }

    console.log(spots);

    let spotsIndex = 0;

    for(let i=0; i<str.length; i++){
      
      if(spotsIndex < spots.length-1){
      
        let firstDist = Math.abs(i - spots[spotsIndex]);
        let secondDist = Math.abs(i - spots[spotsIndex + 1]);

        if(secondDist < firstDist){
          spotsIndex++;
        }
      }

      answer.push(Math.abs(i-spots[spotsIndex]))
    }

    return answer;
  }
  
  console.log(distanceFrom(string, character))
 