const titleCase = (str) => {
  //Filters
  if (str.length === 0) return str;

  //Constants
  let titledString = '';
  let titledarr = [];

  const strToLowerCase = str.toLowerCase();
  const strToArr = strToLowerCase.split(" ");

  for (const ele of strToArr) {
    const upper = `${ele[0].toUpperCase()}${ele.slice(1)}`;
    titledarr.push(upper);
  }

  titledString += titledarr.join(" ");

  return titledString;
};

console.log(titleCase("this is an example")); //should return "This Is An Example"
console.log(titleCase("test")); //should return "Test"
console.log(titleCase("i r cool")); //should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); //should return "What Happens Here"
console.log(titleCase("")); //should return ""
console.log(titleCase("A")); //should return "A"