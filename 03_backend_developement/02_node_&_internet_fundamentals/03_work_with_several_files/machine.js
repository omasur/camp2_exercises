
const container = require("./container");

const machine = {
  expresso: function() {
    return container.consumeLitersOfCoffee(0.08);
  },
  fillWithLitersOfCoffee: function(liters) {
    container.putLitersOfCoffee(liters);
  },
  longCoffee: function() {
    return container.consumeLitersOfCoffee(0.15);
  }
};

module.exports = machine;

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false
