// Given two strings representing two complex numbers.

// You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

var complexNumberMultiply = function(a, b) {
  const partsA = a.split('+');
  const partsB = b.split('+');
  
  const reals = [parseInt(partsA[0]), parseInt(partsB[0])];
  
  let imaginStrs = [partsA[1], partsB[1]];
  
  const imagins = [];
  
  for(let i=0; i<imaginStrs.length; i++){
      let nums = imaginStrs[i].split('');
      nums.pop();
      num = parseInt(nums.join(''));
      imagins.push(num);
  }
  
  console.log(reals,imagins);
  
  let A = (reals[0] * reals[1]) - (imagins[0] * imagins[1]);
  let B = ((reals[0] * imagins[1]) + (reals[1] * imagins[0]));
  
  return A.toString() + '+' + B + 'i';
};