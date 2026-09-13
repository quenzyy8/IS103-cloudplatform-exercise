let currentNumber = "";
let previousNumber = "";
let operator = null;

const display = document.getElementById("display");

function appendNumber(number) {
    if (number === "." && currentNumber.includes(".")) {
        return;
    }

    if (currentNumber === "0" && number !== ".") {
        currentNumber = "";
    }

    currentNumber += number;
    display.value = currentNumber;
}

function chooseOperator(selectedOperator) {
    if (currentNumber === "" && previousNumber === "") {
        return;
    }

    if (currentNumber !== "") {
        if (previousNumber !== "") {
            calculate();
        }

        previousNumber = currentNumber;
        currentNumber = "";
    }

    operator = selectedOperator;
}

function calculate() {
    if (previousNumber === "" || currentNumber === "" || operator === null) {
        return;
    }

    const firstNumber = parseFloat(previousNumber);
    const secondNumber = parseFloat(currentNumber);

    let result;

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":
            if (secondNumber === 0) {
                display.value = "Cannot divide by 0";
                currentNumber = "";
                previousNumber = "";
                operator = null;
                return;
            }
            result = firstNumber / secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;
    }

    currentNumber = String(result);
    previousNumber = "";
    operator = null;

    display.value = currentNumber;
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = null;
    display.value = "0";
}

function deleteLast() {
    currentNumber = currentNumber.slice(0, -1);

    if (currentNumber === "") {
        display.value = "0";
    } else {
        display.value = currentNumber;
    }
}
