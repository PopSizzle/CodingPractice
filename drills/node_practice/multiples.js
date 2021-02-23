const num = process.argv[2];
const divisor = process.argv[3];

let factors = Math.floor(num/divisor);

let result = 0;

for(let i=1; i<=factors; i++){
  result += divisor*i;
}

console.log(result);