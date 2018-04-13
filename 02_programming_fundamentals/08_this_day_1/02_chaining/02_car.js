// See Sparta courses for the exercise summary
const car = {
  distance: 0,
  speed: 0,
  start : function () {
    this.distance = 0;
    this.speed = 0;
    return this;
  },
  changeSpeed : function (speedVal) {
    this.speed = speedVal;
    return this;
  },
  drive : function (minutesVal) {
    this.distance += this.speed * minutesVal / 60;
    return this;
  },
  showDistance : function () {
    return console.log(`${this.distance} Km`);
  }
};

car.start().changeSpeed(130).drive(30).changeSpeed(0).drive(90).showDistance();


module.exports = car;
