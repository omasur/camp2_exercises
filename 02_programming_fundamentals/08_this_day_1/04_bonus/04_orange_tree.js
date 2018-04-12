// See Sparta courses for the exercise summary

const orangeTree = {
  height: 0,
  age: 0,
  oranges: 0,
  alive: true,
  pickAnOrange: function () {
    if (this.oranges > 0) {
      this.oranges--;
      return true;
    } else {
      return false;
    }
  },
  ageOneYear: function () {
    if (this.age === 99) {
      this.alive = false;
      return console.log("Died!");
    } else {
      this.age++;
      if (this.age < 10) {
        this.height+=25;
      } else if (this.age < 20) {
        this.height+=10;
      }

      this.oranges = 0;
      if (this.age >= 5 && this.age < 10) {
        this.oranges+=10;
      } else if (this.age >= 10 && this.age < 20) {
        this.oranges+=20;
      } else if (this.age >= 20 && this.age < 40) {
        this.oranges+=5;
      }
    }
  },
  seed: function () {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
  }
};

orangeTree.seed();
orangeTree.ageOneYear();
orangeTree.ageOneYear();
orangeTree.ageOneYear();

module.exports = orangeTree;
