//arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //console.log(arguments); virkar bara í function
  return a + b;
};
console.log(add(55, 1, 1001));

//this keyword - no longer bound

const user = {
  name: "Arnar",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has lived in " + city);
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  multiplyBy: 3,
  number: [1, 2, 3],
  multiply() {
    return this.number.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());
