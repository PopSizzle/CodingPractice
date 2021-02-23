const fs = require('fs');

const command = process.argv[2];
const amount = process.argv[3];

// Total helper function
const total = () => {
    // Read the txt file
    fs.readFile('./bank.txt', 'utf8', function(err,data){
      
      // print error if exists
      if(err){
        console.log(err);
      }

      numbers = data.split(', ');

      let result = 0;

      // loop through all of the transactions, adding each one to the account
      for(let i=0; i<numbers.length; i++){
        if(parseFloat(numbers[i])){
          result += parseFloat(numbers[i]);

        }
      }

      console.log('You have ' + result.toFixed(2) + ' in your account');
    })
}

// Deposit helper function
const deposit = (value) =>{
    
  // append the new value to the txt file
  fs.appendFile('./bank.txt', ', ' + value, function(err, data){

      // console log any errors
      if(err){
        console.log(err);
      }
    })

  console.log('deposited ' + value);
}

// Withdrawl helper function
const withdraw = (value) => {

  // append a negative value to the txt file
  fs.appendFile('./bank.txt', ', ' + (value*-1), function(err,data){

    // console log errors
    if(err){
      console.log(err);
    }
  })

  console.log('withdrew ' + value);
}

// lotto helper function
const lotto = () =>{
  // generate a random number
  const num = Math.ceil(Math.random()*10);
  // start with a negative
  let value = -10
  // determine if number is a winner
  if(num === 9){
    value += 1000;
  }
  
  // append the value to the txt file
  fs.appendFile('./bank.txt', ', '+ value, function(err,data){

    // console log errors
    if(err){
      console.log(err);
    }
  })

  if(value > 0){
    console.log('You have won the lotto!')
  } else{
    console.log('you have lost the lotto', num)
  }
}

// Switch statement depending on what command is given
switch(command) {
  
  case 'total':
    total();
  break;

  case 'deposit':
    deposit(amount);
  break;

  case 'withdraw':
    withdraw(amount);
  break;

  case 'lotto':
    lotto();
  break;

  default: console.log('please enter a valid operation');
}

