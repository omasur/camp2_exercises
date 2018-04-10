const readline = require("readline");

function getRandomIntUpTo (max) {
  return Math.floor(Math.random() * max) + 1;
}

const nbToGuess = getRandomIntUpTo(100);
console.log(nbToGuess);

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//let text1 = ;

function game (text) {
  reader.question(text, tryNumber => {
    //console.log(`You wrote : ${tryNumber}`);
    if (isNaN(tryNumber)) {
      game("This was not a number\n");
    } else if(tryNumber >100 || tryNumber <1) {
      game("The number is between 1 and 100\n");
    } else if (tryNumber < nbToGuess) {
      game("Too low\n");
    } else if (tryNumber > nbToGuess) {
      game("Too high\n");
    } else {
      console.log("You won!");
      reader.close();
    }
  });
}

game("Guess a number between 1 and 100? ");
