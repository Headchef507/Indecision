function square(x) {
  return x * x;
}

//const squareArrow = x => {
//  return x * x;
//};

const squareArrow = x => x * x;

console.log(squareArrow(4));

/*const getFirstName = (x) => {
  return x.split(" ")[0];
}; */

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("King Joke"));
