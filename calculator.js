const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const multiply = function(a,b) {
  return a * b;
};

const divide = function(a,b) {
  return a / b;
};

let displayWindow = document.querySelector('.displayWindow');
let firstInput;
let secondInput;
let output;
let number = [];
let clear = document.querySelector('.clearBtn');
let one = document.querySelector('.oneBtn');
let two = document.querySelector('.twoBtn');
let three = document.querySelector('.threeBtn');
let four = document.querySelector('.fourBtn');
let five = document.querySelector('.fiveBtn');
let six = document.querySelector('.sixBtn');
let seven = document.querySelector('.sevenBtn');
let eight = document.querySelector('.eightBtn');
let nine = document.querySelector('.nineBtn');
let zero = document.querySelector('.zeroBtn');
let addition = document.querySelector('.additionBtn');
let division = document.querySelector('.divideBtn');
let multiplication = document.querySelector('.multiplyBtn');
let subtraction = document.querySelector('.subtractBtn');
let mathOperator;
let equals = document.querySelector('.equalsBtn');

clear.addEventListener('click', () => {
  displayWindow.textContent = '';
  number = [];
  firstInput = null;
  secondInput = null;
  mathOperator = null;
});

one.addEventListener('click', () => {
  number.push(1);
  displayWindow.textContent = number.join('');
})

two.addEventListener('click', () => {
  number.push(2);
  displayWindow.textContent = number.join('');
})

three.addEventListener('click', () => {
  number.push(3);
  displayWindow.textContent = number.join('');
})

four.addEventListener('click', () => {
  number.push(4);
  displayWindow.textContent = number.join('');
})

five.addEventListener('click', () => {
  number.push(5);
  displayWindow.textContent = number.join('');
})

six.addEventListener('click', () => {
  number.push(6);
  displayWindow.textContent = number.join('');
})

seven.addEventListener('click', () => {
  number.push(7);
  displayWindow.textContent = number.join('');
})

eight.addEventListener('click', () => {
  number.push(8);
  displayWindow.textContent = number.join('');
})

nine.addEventListener('click', () => {
  number.push(9);
  displayWindow.textContent = number.join('');
})

zero.addEventListener('click', () => {
  number.push(0);
  displayWindow.textContent = number.join('');
})

addition.addEventListener('click', () => {
  mathOperator = '+'
  if (firstInput == null || firstInput == undefined) {
    firstInput = number.join('');
    firstInput = Number(firstInput);
  } else {
    secondInput = number.join('');
    secondInput = Number(secondInput);
  }
  number = [];
});

division.addEventListener('click', () => {
  mathOperator = '/'
  if (firstInput == null || firstInput == undefined) {
    firstInput = number.join('');
    firstInput = Number(firstInput);
  } else {
    secondInput = number.join('');
    secondInput = Number(secondInput);
  }
  number = [];
});

subtraction.addEventListener('click', () => {
  mathOperator = '-'
  if (firstInput == null || firstInput == undefined) {
    firstInput = number.join('');
    firstInput = Number(firstInput);
  } else {
    secondInput = number.join('');
    secondInput = Number(secondInput);
  }
  number = [];
});

multiplication.addEventListener('click', () => {
  mathOperator = '*'
  if (firstInput == null || firstInput == undefined) {
    firstInput = number.join('');
    firstInput = Number(firstInput);
  } else {
    secondInput = number.join('');
    secondInput = Number(secondInput);
  }
  number = [];
});

equals.addEventListener('click', () => {
  secondInput = number.join('');
  secondInput = Number(secondInput);
  number = [];
  if (mathOperator === '+') {
    output = add(firstInput, secondInput);
    displayWindow.textContent = output;
  } else if (mathOperator === '-') {
    output = subtract(firstInput, secondInput);
    displayWindow.textContent = output;
  } else if (mathOperator === '*') {
    output = multiply(firstInput, secondInput);
    displayWindow.textContent = output;
  } else if (mathOperator === '/') {
    output = divide(firstInput, secondInput);
    displayWindow.textContent = output;
  }
  firstInput = output;
})