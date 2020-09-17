// Given the array prices where prices[i] is the price of the ith item in a shop. There is a special discount for items in the shop, if you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i], otherwise, you will not receive any discount at all.

// Return an array where the ith element is the final price you will pay for the ith item of the shop considering the special discount.

var finalPrices = function(prices) {
    let finalPrices = [];
    
    const findPrice = (arr, index) => {
        for(let i=index+1; i<arr.length;i++){
            if(arr[i] <= arr[index]){
                finalPrices.push(arr[index] - arr[i]);
                return;
            }
        }
        finalPrices.push(arr[index]);
    }
    
    
    for(let i=0; i<prices.length; i++){
        findPrice(prices, i);
    }
    
    return finalPrices;
};