// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4 / 3) * Math.PI * radius * radius * radius;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return Math.PI * radius * radius * (height / 3);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return width * height * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVolume = 0;
  for (let element of solids) {
    if (element['type'] === 'sphere') {
      totalVolume += sphereVolume(element['radius'])
    } else if (element['type'] === 'cone') {
      totalVolume += coneVolume(element['radius'], element['height'])
    } else if (element['type'] === 'prism') {
      totalVolume += prismVolume(element['height'], element['width'], element['depth'])
    }
  }
  return totalVolume
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
