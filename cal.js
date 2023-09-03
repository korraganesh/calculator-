let displayValue = "0";

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function appendToDisplay(char) {
    if (displayValue === "0" && char !== "C") {
        displayValue = char;
    } else {
        displayValue += char;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function deleteLastCharacter() {
    if (displayValue.length > 1) {
        displayValue = displayValue.slice(0, -1);
    } else {
        displayValue = "0";
    }
    updateDisplay();
}

function calculateResult() {
    try {
        displayValue = eval(displayValue);
    } catch (error) {
        displayValue = "Error";
    }
    updateDisplay();
}
