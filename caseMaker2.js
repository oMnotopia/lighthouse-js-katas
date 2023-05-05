const makeCase = function(input, caseType) {
  switch(typeof caseType){
    case "string":
      switch(caseType){
        case "camel":
          return camelCase(input);
        case "pascal":
          return pascalCase(input);
        case "snake":
          return snakeCase(input);
        case "kebab":
          return kebabCase(input);
        case "title":
          return titleCase(input);
        case "vowel":
          return vowelCase(input);
        case "consonant":
          return consonantCase(input);
        case "upper":
          return upperCase(input);
        case "lower":
          return lowerCase(input);
      } 
    case "object":
      let stringToReturn;
      caseType.sort(compareFn)
      console.log(caseType)
      for (const type of caseType) {
        switch(type){
          case "camel":
            stringToReturn = camelCase(stringToReturn ?  stringToReturn : input);
            break;
          case "pascal":
            stringToReturn =  pascalCase(stringToReturn ?  stringToReturn : input);
            break
          case "snake":
            stringToReturn = snakeCase(stringToReturn ?  stringToReturn : input);
            break;
          case "kebab":
            stringToReturn = kebabCase(stringToReturn ?  stringToReturn : input);
            break;
          case "title":
            stringToReturn = titleCase(stringToReturn ?  stringToReturn : input);
            break;
          case "vowel":
            stringToReturn = vowelCase(stringToReturn ?  stringToReturn : input);
            break;
          case "consonant":
            stringToReturn = consonantCase(stringToReturn ?  stringToReturn : input);
            break;
          case "upper":
            stringToReturn = upperCase(stringToReturn ?  stringToReturn : input);
            break;
          case "lower":
            stringToReturn = lowerCase(stringToReturn ?  stringToReturn : input);
            break;
        } 
      }
      return stringToReturn
  }
} 

//Function to sort array of cases to ensure higher number cases are processed first.
// 1. camel, pascal, snake, kebab, title
// 2. vowel, consonant
// 3. upper, lower
const compareFn = (a, b) => {
  if (a === 'camel' || a === 'pascal' || a === 'snake' || a === 'title' || a === 'kebab'){
    return -1;
  }
  if (a === 'upper' || a === 'lower'){
    return 1;
  }
  if ((a === 'vowel' || a === 'consonant') && (b === 'camel' || b === 'pascal' || b === 'snake' || b === 'title' || b === 'kebab')){
    return 1;
  }
  if ((a === 'vowel' || a === 'consonant') && (b === 'upper' || b === 'lower')){
    return -1;
  }
}

const lowerCase = (input) => {
  return input.toLowerCase();
}

const upperCase = (input) => {
  return input.toUpperCase();
}

const consonantCase = (input) => {
  let stringToReturn = '';
  let consonants = 'bcdfghjklmnpqrstvwxyz';

  for (let i = 0; i < input.length; i++){
    if(consonants.includes(input[i])){
      stringToReturn += input[i].toUpperCase()
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn
}

const vowelCase = (input) => {
  let stringToReturn = '';
  let vowels = 'aeiou';

  for (let i = 0; i < input.length; i++){
    if(vowels.includes(input[i])){
      stringToReturn += input[i].toUpperCase()
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn
}

const titleCase = (input) => {
  let stringToReturn = ''
  
  for (let i = 0; i < input.length; i++){
    if(i === 0){
      stringToReturn += input[i].toUpperCase()
    }
    else if(input[i] === ' '){
      stringToReturn += ' ' + input[i + 1].toUpperCase()
      i++;
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn
}

const kebabCase = (input) => {
  let stringToReturn = ''
  
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      stringToReturn += '-'
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn
}

const snakeCase = (input) => {
  let stringToReturn = ''
  
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      stringToReturn += '_'
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn
}

const pascalCase = (input) => {
  let stringToReturn = ''
  
  for (let i = 0; i < input.length; i++){
    if(i === 0){
      stringToReturn += input[i].toUpperCase()
    } else if(input[i] === ' '){
      stringToReturn += input[i + 1].toUpperCase()
      i++;
    } else {
      stringToReturn += input[i]
    }
  }
  return stringToReturn;
}

const camelCase = (input) => {
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
}



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("tHIs is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "snake", "consonant",  "kebab"]));