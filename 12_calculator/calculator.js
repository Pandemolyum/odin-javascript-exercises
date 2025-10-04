const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, num) => sum * num, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(num) {
  let fac = 1;
	for (num; num > 1; num--) {
    fac *= num;
  }
  return fac;
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
