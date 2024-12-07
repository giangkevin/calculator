function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return "infinity";
    return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;
const currentOperand = document.querySelector('.current-operand');

function operate(firstNumber, operator, secondNumber) {
    clear();
    switch (operator) {
        case "+":
            return add(Number(firstNumber), Number(secondNumber));
        case "-":
            return subtract(Number(firstNumber), Number(secondNumber));
        case "*":
            return multiply(Number(firstNumber), Number(secondNumber));
        case "÷":
            return divide(Number(firstNumber), Number(secondNumber));
    }
}

function display() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.textContent == "C") {
                clear();
                return;
            }
            if (button.textContent === "CE") {
                clearEntry();
                return;
            }

            if (button.textContent === ".") {
                appendDecimal(button.textContent);
            }
            if (button.classList.contains("numbers")) {
                inputNumbers(button.textContent);
            } else if (button.classList.contains("operator")) {
                inputOperator(button.textContent);
            } else if (button.classList.contains("equals")) {
                inputEquals();
            }
        });
    })
}

function appendDecimal(number) {
    if (!isSecondNumber) {
        if (!firstNumber.includes(".")) {
            firstNumber = number + ".";
            currentOperand.textContent = firstNumber;
        }
    } else {
        if (!secondNumber.includes(".")){
            secondNumber = secondNumber + ".";
            currentOperand.textContent = secondNumber;
        }
    }
}

function inputNumbers(number) {
    if (!isSecondNumber) {
        firstNumber += number;
        currentOperand.textContent = firstNumber;
    } else {
        secondNumber += number;
        currentOperand.textContent = secondNumber;
    }
}

function inputOperator(op) {
    if (firstNumber !== "") {
        operator += op;
        currentOperand.textContent = operator;
        isSecondNumber = true;
    }
}

function inputEquals() {
    const result = operate(firstNumber, operator, secondNumber);
    currentOperand.textContent = result;
    firstNumber = result.toString();
    secondNumber = "";
    isSecondNumber = false;
    operator = "";
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    isSecondNumber = false;
    const currentOperand = document.querySelector('.current-operand');
    currentOperand.textContent = "";
}

function clearEntry() {
    if (!isSecondNumber) {
        firstNumber = "";
        currentOperand.textContent = "";
    } else {
        secondNumber = "";
        currentOperand.textContent = "";
    }
}

display();