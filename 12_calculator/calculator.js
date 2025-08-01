const add = function(nb1, nb2) {
	return nb1 + nb2;
};

const subtract = function(nb1, nb2) {
  return nb1 - nb2;
};

const sum = function(arr) {
	return arr.reduce(add, 0);
};

const multiply = function(arr) {
  if (arr.length == 0) return 0;
  return arr.reduce((a,b) => a*b, 1);
};

const power = function(nb1, nb2) {
	return nb1 ** nb2;
};

const factorial = function(nb) {
	if (nb > 0) return nb * factorial(nb-1);
  else if (nb === 0) return 1;
  else return "ERROR";
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
