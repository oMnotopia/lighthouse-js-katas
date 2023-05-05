const instructorWithLongestName = function(instructors) {
  let instructor = {
    name: '',
    course: ''
  }

  for(let name of instructors){
    if(name.name.length > instructor.name.length) instructor = name
  }

  return instructor
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "", course: "Web"},
  {name: "Barnabius", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));