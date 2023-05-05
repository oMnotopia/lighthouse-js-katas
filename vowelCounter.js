const numberOfVowels = function(data) {
  let counter = 0;
  const voweles = 'aeiou';
  for (let i = 0; i < data.length; i++){
    if(voweles.includes(data[i])) counter++;
  }

  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));