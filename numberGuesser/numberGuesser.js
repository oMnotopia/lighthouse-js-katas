let prompt = require("prompt-sync")({
});

let randomNumber = Math.floor(Math.random() * 10);
let answer;
let previousGuesses = [];
let guessCounter = 1;

console.log(randomNumber);
// code below (replace this example)
while (answer !== randomNumber) {
  answer = prompt("Guess a number between 1 an 10: ");

  if (previousGuesses.length !== 0 && previousGuesses.includes(answer)) console.log("You already guessed that!");
  else if (answer < randomNumber) console.log("Your guess is lower!");
  else if (answer > randomNumber) console.log("Your guess is higher!");
  else if (answer === randomNumber) {
    console.log("Your guess is correct! It took you " + guessCounter + " guesses.");
  }
  
  if (!previousGuesses.includes(answer)) previousGuesses.push(answer);
  guessCounter++;
}

