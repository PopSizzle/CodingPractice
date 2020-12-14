// Prime Factors


// The `primeFactors` function should take in a num and return a sorted Array
// of all the factors of the number that are also prime numbers.

const isPrime = (num) =>{
  for(let i=2; i<=num/2; i++){
    if(num % i === 0 && num !== i){
      return false;
    }
  }

  return true;
}

function primeFactors(num) {

  let factors=[];
  
  for(let i=2; i<num/2; i++){
    if(num % i === 0){
      if(isPrime(i)){
        factors.push(i);
        console.log(i + " is prime")
      }
    }
  }

  if(isPrime(num)){
    factors.push(num);
  }
  
  return factors;

}