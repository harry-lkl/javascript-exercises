const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  if (array.length == 0) {
    return 0;
  } else {
	  return array.reduce((total,num) => total + num);
  }
};

const multiply = function(array) {
  if (array.length == 0) {
    return 0;
  } else {
	  return array.reduce((total,num) => total * num);
  }
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
  let number = 1;
	for (let i = 1; i <= a; i++) {
    number *= i;
  }
  return number;

  // can also use recursion:
  // if a === 0, return 1;
  // return a * factorial(a - 1);  
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
