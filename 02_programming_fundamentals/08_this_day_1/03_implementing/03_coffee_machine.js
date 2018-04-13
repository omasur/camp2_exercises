// See Sparta courses for the exercise summary
const machine = {
  litersOfCoffee: 0,
  expressoQuantity: 0.08,
  longCoffeeQuantity: 0.15,
  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee += liters;
  },
  expresso: function () {
    if (this.litersOfCoffee < this.expressoQuantity) {
      return false;
    }
    this.litersOfCoffee -= this.expressoQuantity;
    return true;
  },
  longCoffee: function () {
    if (this.litersOfCoffee < this.longCoffeeQuantity) {
      return false;
    }
    this.litersOfCoffee -= this.longCoffeeQuantity;
    return true;
  },
};
// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
