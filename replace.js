// Given an array arr, replace every element in that array with the greatest 
// element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function(arr) {
    const result = [];
    
    for(let i=0; i<arr.length; i++){
        if(i === arr.length-1){
            result.push(-1)
        } else{
            let max = arr[i+1];
            
            for(let j=i+1; j<arr.length; j++){
                if(arr[j] > max){
                    max = arr[j];
                }
            }
            result.push(max);
        }
    }
    return result;
};