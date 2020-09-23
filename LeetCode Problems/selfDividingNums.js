// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

// Also, a self-dividing number is not allowed to contain the digit zero.

// Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

var selfDividingNumbers = function(left, right) {
    const result = []; 
    
    for(let i=left; i<=right; i++){
        let digits = i.toString().split('');

        let sd = true;
        
        for(let j=0; j<digits.length; j++){
            if(i % parseInt(digits[j]) !== 0){
                sd = false;
                break;
            }
        }
        
        if(sd){
            result.push(i);
        }
    }

    return result;
};