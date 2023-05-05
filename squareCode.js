const squareCode = function(message) {
  //Remove spaces and get length of word in order to find square root value of length
  const messageNoSpaces = message.replaceAll(' ', '');
  const lengthOfMessage = messageNoSpaces.length;

  //Get square root length, if value is not an integer round up so the entire word can be written
  let columnValue = Math.sqrt(lengthOfMessage);
  if (!Number.isInteger(columnValue)) columnValue = Math.ceil(columnValue);
  let rowValue = lengthOfMessage / columnValue;

  let squareString = '';
  let encryptedString = '';

  //Turn message into a square
  // for(let i = 0; i <= rowValue; i++){
  //   for(let j = i*columnValue; j < (i === 0 ? columnValue : (i + 1) * columnValue); j++){
  //     if(j >= rowValue*columnValue) continue;
  //     squareString += messageNoSpaces[j]
  //   }
  // squareString += '\n'
  // }
  //Loops that break up words based previously determined number of rows.
  //Inner loop increase by total column value to get characters in vertical order.
  //Then moves over 1 character and repeats process.
  for (let i = 0; i <= Math.ceil(rowValue); i++){
    for (let j = i; j < messageNoSpaces.length; j += columnValue) {
      encryptedString += messageNoSpaces[j];
    }
    encryptedString += ' '
  }
  //console.log(squareString, messageNoSpaces)
  return encryptedString
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));