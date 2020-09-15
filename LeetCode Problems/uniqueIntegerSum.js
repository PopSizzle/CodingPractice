// Given an integer n, return any array containing n 
// unique integers such that they add up to 0.


var sumZero = function(n) {
    let arr = [];
    
    for(let i=1; i<=(n/2); i++){
        arr.push(i);
        arr.push(i*(-1));
    }
    
    if(n%2 !== 0){
        arr.push(0);
    }
    
    return arr;
};