const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  sm = 0;
	for (let i = 0; i < arr.length; i++){
    sm += arr[i];
  }
  return sm;
};


const multiply = function(arr) {
  ans = 1;
	for (let i = 0; i < arr.length; i++){
    ans *= arr[i];
  }
  return ans;
};

const power = function(num, pw) {
	ans = 1
  for (let i = 0; i < pw; i++){
    ans *= num;
  }
  return ans;
};

const factorial = function(num) {
  if (num == 0){
    return 1
  }
  ans = num
  for (let i = num - 1; i > 0; i--){
    ans *= i;
  }
  return ans;
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
