const blocksAway = function(directions) {
  let blocksMoved = {
    east: 0,
    north: 0
  }
  //0 = North, 1 = East, 2 = South, 3 = West.
  let directionNumber = 0;

  for (let i = 0; i < directions.length; i++) {
    //Setting initial direction of movement
    if (directions[i] === 'right' && i === 0) {
      directionNumber = 1;
    }
    if (directions[i] === 'left' && i === 0) {
      directionNumber = 0;
    }
    
    //If even number direction is being set, if odd the number of spaces moved is being set.
    if(i % 2 === 0 && i !== 0) {
      switch(directions[i]){
        case 'right':
          directionNumber += 1;
          if(directionNumber > 3) directionNumber = 0
          break;
        case 'left':
          directionNumber--;
          if (directionNumber < 0) directionNumber = 3
          break;
      }
    } 
    if(i % 2 === 1) {
      switch(directionNumber){
        case 0: 
          blocksMoved['north'] += directions[i];
          break;
        case 1:
          blocksMoved['east'] += directions[i];
          break;
        case 2:
          blocksMoved['north'] -= directions[i];
          break;
        case 3:
          blocksMoved['east'] -= directions[i];
          break;
      }
    }
  }
  return blocksMoved;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));