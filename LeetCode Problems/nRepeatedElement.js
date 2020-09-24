// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

var repeatedNTimes = function(A) {
    let tracker = {};
    
    for(let i=0; i<A.length; i++){
        if(tracker[A[i]]){
            return A[i];
        } else {
            tracker[A[i]] = true;
        }
    }
};