// Insert code here
class Aquarium {
  constructor(fishes = [], algaes =[] /* Other arguments */) {
    this.fishes = fishes;
    this.algaes = algaes;
  }
  addFish(fish) {
    this.fishes.push(fish);
  }
  addAlgae(algae) {
    this.algaes.push(algae);
  }
  endTurn() {
    console.log("Algae length: ",this.algaes.length);
    this.fishes.forEach((fish) => {
      console.log("Fish name:", fish.name, " - sex:", fish.sex);
    })

    this.fishes.forEach ((element) => {
      if (!(element.isCarnivor) && (this.algaes.length > 0)) {
        console.log("C est un vegan et il peut prendre une algue");
        this.algaes.pop();
      } else if ((element.isCarnivor) && (this.fishes.length > 1)) {
        console.log("C est un carn et il peut manger");
        this.fishes.pop();
      }

    });
  }
}

class Fish {
  constructor(name, sex, isCarnivor =true/* Other arguments */) {
    this.name = name;
    this.sex = sex;
    this.isCarnivor = isCarnivor;
  }
}

class Algae {
  constructor(size /* Other arguments */) {
    this.size = size;
  }
}

let aqua = new Aquarium([new Fish('Toto', 'F', 0)],[new Algae(5)]);
aqua.addFish(new Fish('titi', 'M', 1))
aqua.addFish(new Fish('tata', 'F', 0))
console.log(aqua);
aqua.endTurn();


module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
