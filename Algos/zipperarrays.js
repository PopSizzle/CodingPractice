// Zipping Arrays


// The `zipArrays` function should take in two arrays of numbers and
// add numbers at the same indices together. Return a new array
// with sums and any unpaired elements.

function zipArrays(arr1, arr2) {
  
  let longer;
  let shorter;
  let result=[];
  
  if(arr1.length > arr2.length){
    longer = arr1;
    shorter = arr2;
  } else{
    longer = arr2;
    shorter = arr1;
  }

  for(let i=0; i<longer.length; i++){
    result.push(longer[i]);

    if(shorter[i]){
      result[i] += shorter[i];
    }
  }

  return result;