const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

let currentOperand = "";
let previousOperand = "";
let operation = "";

const clear = () => {
  currentOperand = "";
  previousOperand = "";
  operation = "";
};

const deleteLastEntry = () => {
  currentOperand = currentOperand.toString().slice(0, -1);
};

const appendNumber = (number) => {
  if (number === "." && currentOperand.includes(".")) return;
  currentOperand = currentOperand.toString() + number.toString();
};


const chooseOperation = (operationType) => {
  if (currentOperand === "") return;
  if (previousOperand !== "") compute();

  operation = operationType;
  previousOperand = currentOperand;
  currentOperand = "";
};

const compute = () => {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  if (operation === "+") computation = prev + current;
  if (operation === "-") computation = prev - current;
  if (operation === "*") computation = prev * current;
  if (operation === "÷") computation = prev / current;

  currentOperand = computation;
  operation = "";
  previousOperand = "";
};

const getDisplayNumber = (number) => {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split(".")[0]);
  const decimalDigits = stringNumber.split(".")[1];
  let integerDisplay;
  if (isNaN(integerDigits)) {
    integerDisplay = "";
  } else {
    integerDisplay = integerDigits.toLocaleString("en", {
      maximumFractionDigits: 0
    });
  }
  if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
};

const updateDisplay = () => {
  currentOperandTextElement.innerText = getDisplayNumber(currentOperand);
  if (operation != null) {
    previousOperandTextElement.innerText = `${getDisplayNumber(
      previousOperand
    )} ${operation}`;
  } else {
    previousOperandTextElement.innerText = "";
  }
};


numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});

allClearButton.addEventListener("click", () => {
  clear();
  updateDisplay();
});

deleteButton.addEventListener("click", () => {
  deleteLastEntry();
  updateDisplay();
});
