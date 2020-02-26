class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear(); // call function to clear inputs by default
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
        computation = prev * current;
        break;
      case '÷':
        computation = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = '';
    }
  }

};

// initialise buttons as variables
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  })
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  })
});

equalsButton.addEventListener('click', button => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
  calculator.delete();
  calculator.updateDisplay();
});

// keyboard inputs
document.onkeydown = function(e){
  switch(e.keyCode){
    case 48:
      calculator.appendNumber('0');
      calculator.updateDisplay();
      break;
    case 49:
      calculator.appendNumber('1');
      calculator.updateDisplay();
      break;
    case 50:
      calculator.appendNumber('2');
      calculator.updateDisplay();
      break;
    case 51:
      calculator.appendNumber('3');
      calculator.updateDisplay();
      break;
    case 52:
      calculator.appendNumber('4');
      calculator.updateDisplay();
      break;
    case 53:
      calculator.appendNumber('5');
      calculator.updateDisplay();
      break;
    case 54:
      calculator.appendNumber('6');
      calculator.updateDisplay();
      break;
    case 55:
      calculator.appendNumber('7');
      calculator.updateDisplay();
      break;
    case 56:
      calculator.appendNumber('8');
      calculator.updateDisplay();
      break;
    case 57:
      calculator.appendNumber('9');
      calculator.updateDisplay();
      break;
    case 190:
      calculator.appendNumber('.');
      calculator.updateDisplay();
      break;
  }
};
