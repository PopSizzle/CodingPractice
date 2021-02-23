const operator = process.argv[2];

const firstNum = parseFloat(process.argv[3]);
const secondNum = parseFloat(process.argv[4]);

let result;

switch(operator){
  case 'add':
    result = firstNum + secondNum;
    break;
  
  case 'subtract':
    result = firstNum - secondNum;
    break;

  case 'multiply':
    result = firstNum * secondNum;
    break;

  case 'divide':
    result = firstNum / secondNum;
    break;

  case ' remainder':
    result = firstNum % secondNum;
    break;

  default: 'Please submit requests in the following format: add 1 2'
    result = 'invalid operation' 
}

console.log(result);

