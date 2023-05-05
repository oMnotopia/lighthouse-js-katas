const organizeInstructors = function(instructors) {

  let organizedInstructors = {
  }

  for (let instructor of instructors){
    organizedInstructors.hasOwnProperty([instructor['course']]) ? organizedInstructors[instructor['course']].push(instructor['name']) : organizedInstructors[instructor['course']] = [instructor['name']]
  }

  return organizedInstructors
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));