const multiplicationTable = function(maxValue) {

  let stringToPrint = ''

  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      stringToPrint += (i*j + ' ') 
    }
    stringToPrint += '\n'
  }  
  return stringToPrint;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));