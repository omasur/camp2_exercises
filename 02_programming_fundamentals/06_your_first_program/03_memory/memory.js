// This function will clear the terminal when called
const clear = require("cli-clear");
const cards = ["🐰", "🐰", "🎃", "🎃", "🌲","🌲"];
let cardsOff = ["1", "2", "3", "4", "5","6"];

// function randomInt(mini, maxi)
// {
//      var nb = mini + (maxi+1-mini)*Math.random();
//      return Math.floor(nb);
// }

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}
shuffle(cards)
console.log (cards);


const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let cardsOff2 = cardsOff.join("")

reader.question(`${cardsOff2}\nReturn 2 cards : Which Ids ? (ex: 24) :`, CardId => {
  //console.log(`${CardId}`);
  let card1 = cards[CardId.toString()[0]-1]
  let card2 = cards[CardId.toString()[1]-1]
  for (let i=0 ; i<2 ; i++) {
    cardsOff.splice(CardId.toString()[i]-1, 1, cards[CardId.toString()[i]-1]);
  }
  if (card1 === card2) {
    console.log("You Won!")
  }
  console.log (cardsOff.join(""));

  reader.close();
});
