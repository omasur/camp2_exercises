const readline = require("readline");

let randomValue = Math.floor(Math.random() * Math.floor(101));
console.log(randomValue);

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//while (randomValue !== tryNumberInit) {
  //console.log(randomValue, tryNumberInit)
let text1 = "Guess a number between 1 and 100? ";
let nbloop =0;

function game (text) {
  reader.question(text, tryNumber => {
    console.log(`You wrote : ${tryNumber}`);
    nbloop ++ ;
    if (isNaN(tryNumber)) {
      game("This was not a number\n");
    } else if(tryNumber >100 || tryNumber <1) {
      game("The number is between 1 and 100\n");
    } else if (tryNumber < randomValue) {
      game("Too low\n");
    } else if (tryNumber > randomValue) {
      game("Too high\n");
    } else {
      if (nbloop === 1) {
        console.log("Bingo !!! You won in 1 time!");
      } else {
        console.log(`You won in ${nbloop} steps!`);
      }
      reader.close();
    }
  });
}

game(text1);
