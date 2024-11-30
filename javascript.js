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
    return a / b;
}

const firstNumber = null;
const secondNumber = null;
const operator = null;

function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+" : 
            return add(firstNumber, secondNumber);
        case "-" : 
            return subtract(firstNumber, secondNumber);
        case "*" : 
            return multiply(firstNumber, secondNumber);
        case "/" :
            return divide(firstNumber, secondNumber);
    }
}
