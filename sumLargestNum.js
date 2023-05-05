const sumLargestNumbers = function(data) {
  let largeNum1 = 0;
  let largeNum2 = 0;
  
  for (let num of data){

    if (num > largeNum2) {
      largeNum1 = largeNum2;
      largeNum2 = num;
    } else if (num > largeNum1) largeNum1 = num; 
  }
  return largeNum1 + largeNum2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([-1, 0, 5, 4, 34, 6, 92, 2]));