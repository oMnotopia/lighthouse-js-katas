const talkingCalendar = function(date) {

  //Split the month, day, and year in to individual values
  const newYear = date.slice(0, 4);
  const newMonth = date.slice(5, 7)
  let newDay = date.slice( 8, 10)

  //Create date value in to use toLocaleString which converts month number to month name and removes leading 0s in days.
  const readableDate = new Date(newYear, newMonth, newDay)
  const month = readableDate.toLocaleString('default', { month: 'long' });
  let day = readableDate.toLocaleString('default', { day: 'numeric' });

  //Add ordinal values to days
  day += ordinals(newDay);

  return  `${month} ${day}, ${newYear}`
};

const ordinals = function(newDay){
  if (newDay > 3 && newDay < 21) return 'th';
  switch (newDay % 10) {
    case 1:  
      return "st";
    case 2:  
      return "nd";
    case 3:  
      return "rd";
    default: 
      return "th";
  }
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));