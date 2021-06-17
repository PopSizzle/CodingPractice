// Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Return the maximum number of water bottles you can drink.

var numWaterBottles = function(numBottles, numExchange) {
    
  let result = numBottles;
  
  let empty = numBottles;
  
  while(empty >= numExchange){
      
      result += Math.floor(empty/numExchange);
      
      empty -= Math.floor(empty/numExchange) * (numExchange-1);
  }
  
  return result;
  
};