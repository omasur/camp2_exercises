const machine = {
  litersOfCoffee: 0,
  expressoQuantity: 0.08,
  longCoffeeQuantity: 0.15,

};

function putLitersOfCoffee(numberOfLiters) {
  fillWithLitersOfCoffee: function (liters) {
    this.litersOfCoffee += liters;
  }
}

function consumeLitersOfCoffee(numberOfLiters) {
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
  }
}

module.exports = {
  putLitersOfCoffee
}
