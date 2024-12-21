function appendToDisplay(value) {
    const display = document.getElementById('display');
    const errorMessage = document.getElementById('error-message');
    
    // Clear error message
    errorMessage.textContent = '';

    // Check if the value is a valid number or operator
    if (isNaN(value) && !['+', '-', '*', '/'].includes(value)) {
        errorMessage.textContent = 'Invalid input! Please enter numbers or operators.';
        return;
    }

    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    const errorMessage = document.getElementById('error-message');
    display.value = '';
    errorMessage.textContent = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const errorMessage = document.getElementById('error-message');

    try {
        // Evaluate the expression
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        errorMessage.textContent = 'Error! Please check your input.';
    }
}