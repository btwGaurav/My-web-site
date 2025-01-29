const display = document.getElementById('display');

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Append a value to the display
function appendValue(value) {
    display.value += value;
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        alert('Invalid calculation');
        clearDisplay();
    }
}