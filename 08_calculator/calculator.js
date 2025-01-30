const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function(fact) {
	if (fact === 0) {
    return 1;
  } else {
    let i = 1;
    let product = 1;

    while (i <= fact) {
      product *= i;
      i++;
    }

    return product;
  }
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
