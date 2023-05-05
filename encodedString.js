const urlEncode = function(text) {

  let newString = ''
  for(let i = 0; i < text.length; i++){
    if((i === 0 && text[0] === ' ') || (i === text.length - 1 && text[text.length - 1] === ' ')){
      newString += text[i]
    } else if (text[i] === ' ') {
      newString += '%20'
    } else {
      newString += text[i]
    }
  }

  return newString
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));