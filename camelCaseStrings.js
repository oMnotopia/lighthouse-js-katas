const camelCase = function(input) {

  let stringToReturn = ''

  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      stringToReturn += input[i + 1].toUpperCase()
      i++;
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));