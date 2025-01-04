// JavaScript functionality for the calculator

// Get the display element from the DOM
const display = document.querySelector('input[name="display"]');

// Function to clear the calculator display
function clearDisplay() {
    display.value = ''; // Clears the display input field
}

// Function to delete the last character in the display
function deleteLast() {
    display.value = display.value.slice(0, -1); // Removes the last character
}

// Function to append a character or number to the display
function appendToDisplay(value) {
    display.value += value; // Adds the character or number to the display
}

// Function to evaluate the expression shown on the display
function calculate() {
    try {
        display.value = eval(display.value); // Evaluates the expression using eval()
    } catch (error) {
        display.value = 'Error'; // Displays 'Error' if evaluation fails
    }
}

// Event listeners for button clicks
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', (event) => {
        const value = event.target.value; // Gets the value of the clicked button
        switch (value) {
            case 'AC':
                clearDisplay(); // Calls function to clear display
                break;
            case 'DE':
                deleteLast(); // Calls function to delete last character
                break;
            case '=':
                calculate(); // Calls function to evaluate expression
                break;
            default:
                appendToDisplay(value); // Appends clicked value to the display
                break;
        }
    });
});
