const urlDecode = function(text) {
  let keyStart = 0;
  let keyEnd = 0;
  let valueStart = 0;
  let valueEnd = 0;
  let keyWord = ''
  let valueWord = ''

  let newObj = {}
  
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '='){
      keyEnd = i;
      valueStart = i + 1;
      keyWord = text.slice(keyStart, keyEnd)
    }
    if(i === text.length - 1){
      valueEnd = i;
      valueWord = text.slice(valueStart, valueEnd + 1)
    }
    if (text[i] === '&' ){
      valueEnd = i;
      valueWord = text.slice(valueStart, valueEnd)
      keyStart = i + 1;
    }
    if(keyWord && valueWord) {
      let valueWordWithSpaces = valueWord.replaceAll('%20', ' ')
      newObj[keyWord] = valueWordWithSpaces;
      keyWord = '';
      valueWord = ''
    }
  }

  return newObj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);