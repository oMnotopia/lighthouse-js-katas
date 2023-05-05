const calculateChange = function(total, cash) {

  let returnChange = {
  }
  
  let returnChangeValues = {
    twentyDollars: 2000,
    tenDollars: 1000,
    fiveDollars: 500,
    twoDollars: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  }
 
  let change = cash - total;
  while(change > 0){
    if(change / returnChangeValues['twentyDollars'] >= 1){
      returnChange['twentyDollars'] = returnChange['twentyDollars'] + 1 || 1;
      change -= 2000;
    } else if(change / returnChangeValues['tenDollars'] >= 1){
      returnChange['tenDollars'] = returnChange['tenDollars'] + 1 || 1;
      change -= 1000;
    } else if(change / returnChangeValues['fiveDollars'] >= 1){
      returnChange['fiveDollars'] = returnChange['fiveDollars'] + 1 || 1;
      change -= 500;
    } else if(change / returnChangeValues['twoDollars'] >= 1){
        returnChange['twoDollars'] = returnChange['twoDollars'] + 1 || 1;
        change -= 200;
    } else if(change / returnChangeValues['oneDollar'] >= 1){
      returnChange['oneDollar'] = returnChange['oneDollar'] + 1 || 1;
      change -= 100;
    } else if(change / returnChangeValues['quarter'] >= 1){
      returnChange['quarter'] = returnChange['quarter'] + 1 || 1;
      change -= 25;
    } else if(change / returnChangeValues['dime'] >= 1){
      returnChange['dime'] = returnChange['dime'] + 1 || 1;
      change -= 10;
    } else if(change / returnChangeValues['nickel'] >= 1){
      returnChange['nickel'] = returnChange['nickel'] + 1 || 1;
      change -= 5;
    } else if(change / returnChangeValues['penny'] >= 1){
      returnChange['penny'] = returnChange['penny'] + 1 || 1;
      change -= 1;
    }
  }

  return returnChange
};

console.log(calculateChange(1787, 20000))
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));