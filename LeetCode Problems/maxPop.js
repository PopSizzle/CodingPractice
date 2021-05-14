var maximumPopulation = function(logs) {
    
  let max = 0;
  
  let curr = 0;
  
  let births = [];
  
  let deaths = [];
  
  let j=0;
  
  let earliest;
  
  for(let i=0; i<logs.length; i++){
      births.push(logs[i][0]);
      deaths.push(logs[i][1]);
  }
  
  births.sort((a,b) => a - b);
  deaths.sort((a,b) => a - b);
  
  for(let i=0; i<births.length; i++){
      if(births[i] < deaths[j]){
          curr++;
          
          if(curr > max){
              max = curr;
              earliest = births[i];
          }
      } else{
          j++;
      }
  }
  
  return earliest;
  
};

let ages = [[2033,2034],[2039,2047],[1998,2042],[2047,2048],[2025,2029],[2005,2044],[1990,1992],[1952,1956],[1984,2014]];

console.log(maximumPopulation(ages));