const repeatNumbers = function(data) {

  let stringToBePrinted = ''
  for(let i = 0; i < data.length; i++) {
    for(let j = 0; j < (data[i][1]); j++){
      stringToBePrinted += data[i][0]
      if(j === data[i][1] - 1 && i !== data.length - 1) stringToBePrinted += ', '
    }
  }
  return stringToBePrinted
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));