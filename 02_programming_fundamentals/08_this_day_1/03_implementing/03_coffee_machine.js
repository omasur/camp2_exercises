// See Sparta courses for the exercise summary
const machine = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee = (this.litersOfCoffee * 100 + liters * 100) /100 ;
  },
  expresso: function () {
    if (this.litersOfCoffee * 100 >= 8) {
      this.litersOfCoffee = (this.litersOfCoffee * 100 - 8) / 100;
      console.log(this.litersOfCoffee);
      return true;
    } else {
      return false;
    }
  },
  longCoffee: function () {
    if (this.litersOfCoffee * 100 >= 15) {
      this.litersOfCoffee = (this.litersOfCoffee * 100 - 15) / 100;
      return true;
    } else {
      return false;
    }
  },
};
// Coffee Machine usage. Insert your code above this comment

machine.fillWithLitersOfCoffee(0.16);
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true
console.log(machine.litersOfCoffee); // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee); // => 0.02
console.log(machine.expresso()); // => false

module.exports = machine;
