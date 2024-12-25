let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
function calculateSquare() {
    try {
        currentInput = Math.pow(eval(currentInput), 2).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function calculateSquareRoot() {
    try {
        currentInput = Math.sqrt(eval(currentInput)).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}

function calculatePercentage() {
    try {
        currentInput = (eval(currentInput) / 100).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
    }
}
function calculateTrig(operation) {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
        display.value = 'Error';
        return;
    }

    switch (operation) {
        case 'sin':
            display.value = Math.sin(value * (Math.PI / 180)); // Convert degrees to radians
            break;
        case 'cos':
            display.value = Math.cos(value * (Math.PI / 180)); // Convert degrees to radians
            break;
        case 'tan':
            display.value = Math.tan(value * (Math.PI / 180)); // Convert degrees to radians
            break;
        default:
            display.value = 'Error';
    }
}
function toggleCalculator() {
    isOn = !isOn; // Toggle the state
    display.value = isOn ? '' : 'OFF'; // Show OFF when turned off
}

