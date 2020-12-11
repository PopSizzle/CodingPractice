var validMountainArray = function(arr) {
  let increasing = true;
  
  let decreasing = false;
  
  if(arr[1] < arr[0]){
      return false;
  }
  
  for(let i=1; i<arr.length; i++){
      if(arr[i] === arr[i-1]){
          return false;
      }
      
      if(arr[i] > arr[i-1]){
          if(!increasing){
              return false;
          }
      }
      
      if(arr[i] < arr[i-1]){
          increasing = false;
          decreasing = true;
      }
  }
  
  if(!increasing && decreasing){
      return true
  } else{
      return false;
  }
};