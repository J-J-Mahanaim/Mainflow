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
