const orange_tree = require("./03_orange_tree");

test("the Orange Tree should age each year", function() {
  orange_tree.seed();
  orange_tree.ageOneYear();
  orange_tree.ageOneYear();
  const result = orange_tree.age;
  expect(result).toEqual(2);
});

test("it should grow each year : 2 years", function() {
  orange_tree.seed();
  orange_tree.ageOneYear();
  orange_tree.ageOneYear();
  const result = orange_tree.height;
  expect(result).toEqual(50);
});

test("it should grow each year : 10 years", function() {
  orange_tree.seed();
  for (let i=0; i<10; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.height;
  expect(result).toEqual((9*25)+10);
});

test("it should grow each year : 20 years", function() {
  orange_tree.seed();
  for (let i=0; i<20; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.height;
  expect(result).toEqual((9*25)+(10*10));
});

test("it should grow each year : 25 years", function() {
  orange_tree.seed();
  for (let i=0; i<25; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.height;
  expect(result).toEqual((9*25)+(10*10));
});


test("it should produce each year : 3 years", function() {
  orange_tree.seed();
  for (let i=0; i<3; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.oranges;
  expect(result).toEqual(0);
});

test("it should produce each year : 10 years", function() {
  orange_tree.seed();
  for (let i=0; i<10; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.oranges;
  expect(result).toEqual(20);
});

test("pickAnOrange possible : 10 years", function() {
  orange_tree.seed();
  for (let i=0; i<10; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.pickAnOrange();
  expect(result).toEqual(true);
});

test("pick 12 Orange impossible : 9 years", function() {
  orange_tree.seed();
  for (let i=0; i<9; i++) {
  orange_tree.ageOneYear();
  }
  for (let j=0; j<11; j++) {
  orange_tree.pickAnOrange();
  }
  const result = orange_tree.pickAnOrange();
  expect(result).toEqual(false);
});

test("pick 18 Oranges possible : 15 years", function() {
  orange_tree.seed();
  for (let i=0; i<15; i++) {
  orange_tree.ageOneYear();
  }
  for (let j=0; j<17; j++) {
  orange_tree.pickAnOrange();
  }
  const result = orange_tree.pickAnOrange();
  expect(result).toEqual(true);
});

test("pick 3 Oranges possible : 39 years", function() {
  orange_tree.seed();
  for (let i=0; i<39; i++) {
  orange_tree.ageOneYear();
  }
  for (let j=0; j<3; j++) {
  orange_tree.pickAnOrange();
  }
  const result = orange_tree.pickAnOrange();
  expect(result).toEqual(true);
});


test("pick 3 Oranges impossible : 40 years", function() {
  orange_tree.seed();
  for (let i=0; i<40; i++) {
  orange_tree.ageOneYear();
  }
  for (let j=0; j<3; j++) {
  orange_tree.pickAnOrange();
  }
  const result = orange_tree.pickAnOrange();
  expect(result).toEqual(false);
});


test("it should not die until it is at least 50 years old and can't get past 100 years : 51 years", function() {
  orange_tree.seed();
  for (let i=0; i<51; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.alive;
  expect(result).toEqual(true);
});

test("it should not die until it is at least 50 years old and can't get past 100 years : 100 years", function() {
  orange_tree.seed();
  for (let i=0; i<100; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.alive;
  expect(result).toEqual(false);
});

test("it should not die until it is at least 50 years old and can't get past 100 years : 105 years", function() {
  orange_tree.seed();
  for (let i=0; i<105; i++) {
  orange_tree.ageOneYear();
  }
  const result = orange_tree.alive;
  expect(result).toEqual(false);
});

test("When we seed an orangeTree, it resets all its attributes", function() {
  orange_tree.seed();
  const result = [orange_tree.height, orange_tree.age, orange_tree.oranges, orange_tree.alive] ;
  expect(result).toEqual([0,0,0,true]);
});
