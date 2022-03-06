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

function operate(operator) {
  if (operator === '+') {
    output = add(firstInput, secondInput);
    updateDisplay();
  } else if (operator === '-') {
    output = subtract(firstInput, secondInput);
    updateDisplay();
  } else if (operator === '*') {
    output = multiply(firstInput, secondInput);
    updateDisplay();
  } else if (operator === '/') {
    if (secondInput == 0) {
      output = 'ERROR';
    } else {
    output = divide(firstInput, secondInput);
    updateDisplay();
    }
  }
}

function updateDisplay() {
  let disp = output.toString();
  if(disp.length > 9) {
    display.textContent = disp.substring(0, 9);
  } else {
    display.textContent = disp;
  }
}

let display = document.querySelector('.displayWindow');
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
let decimal = document.querySelector('.decimalBtn');
let backspace = document.querySelector('.backspaceBtn');
let mathOperator;
let equals = document.querySelector('.equalsBtn');

clear.addEventListener('click', () => {
  output = '';
  updateDisplay();
  number = [];
  firstInput = null;
  secondInput = null;
  mathOperator = null;
});

backspace.addEventListener('click', () => {
  number.pop();
  display.textContent = number.join('');
})

one.addEventListener('click', () => {
  number.push(1);
  display.textContent = number.join('');
})

two.addEventListener('click', () => {
  number.push(2);
  display.textContent = number.join('');
})

three.addEventListener('click', () => {
  number.push(3);
  display.textContent = number.join('');
})

four.addEventListener('click', () => {
  number.push(4);
  display.textContent = number.join('');
})

five.addEventListener('click', () => {
  number.push(5);
  display.textContent = number.join('');
})

six.addEventListener('click', () => {
  number.push(6);
  display.textContent = number.join('');
})

seven.addEventListener('click', () => {
  number.push(7);
  display.textContent = number.join('');
})

eight.addEventListener('click', () => {
  number.push(8);
  display.textContent = number.join('');
})

nine.addEventListener('click', () => {
  number.push(9);
  display.textContent = number.join('');
})

zero.addEventListener('click', () => {
  number.push(0);
  display.textContent = number.join('');
})

decimal.addEventListener('click', () => {
  if (!number.includes('.')) {
    number.push('.');
    display.textContent = number.join('');
  }
})

addition.addEventListener('click', () => {
  if (firstInput == null || firstInput == undefined) {
    mathOperator = '+';
    firstInput = Number(number.join(''));
  } else {
    secondInput = Number(number.join(''));
    operate(mathOperator);
    updateDisplay();
    mathOperator = '+';
    firstInput = output;
  }
  number = [];
});

division.addEventListener('click', () => {
  if (firstInput == null || firstInput == undefined) {
    mathOperator = '/';
    firstInput = Number(number.join(''));
  } else if (mathOperator == '=') {
    mathOperator = '/';
  } else {
    
    secondInput = Number(number.join(''));
    operate(mathOperator);
    updateDisplay();
    mathOperator = '/';
    firstInput = output;
  }
  number = [];
});

subtraction.addEventListener('click', () => {
  if (firstInput == null || firstInput == undefined) {
    mathOperator = '-';
    firstInput = Number(number.join(''));
  } else {
    secondInput = Number(number.join(''));
    operate(mathOperator);
    updateDisplay();
    mathOperator = '-';
    firstInput = output;
  }
  number = [];
});

multiplication.addEventListener('click', () => {
  if (firstInput == null || firstInput == undefined) {
    mathOperator = '*';
    firstInput = Number(number.join(''));
  } else if (mathOperator == '=') {
    mathOperator = '*';
  } else {
    
    secondInput = Number(number.join(''));
    operate(mathOperator);
    updateDisplay();
    mathOperator = '*';
    firstInput = output;
  }
  number = [];
});

equals.addEventListener('click', () => {
  if (firstInput != undefined) {
    secondInput = Number(number.join(''));
    operate(mathOperator);
    mathOperator = '=';
    number = [];
    firstInput = output;
  }
});