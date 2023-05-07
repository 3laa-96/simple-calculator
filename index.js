// Defined variables
let calculator = "";
let calcDisplay = document.getElementById("calculatorDisplay");
const num0Btn = document.getElementById("num0");
const num1Btn = document.getElementById("num1");
const num2Btn = document.getElementById("num2");
const num3Btn = document.getElementById("num3");
const num4Btn = document.getElementById("num4");
const num5Btn = document.getElementById("num5");
const num6Btn = document.getElementById("num6");
const num7Btn = document.getElementById("num7");
const num8Btn = document.getElementById("num8");
const num9Btn = document.getElementById("num9");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");
const multiBtn = document.getElementById("multiBtn");
const deviBtn = document.getElementById("deviBtn");
const equalBtn = document.getElementById("equalBtn");
const resetBtn = document.getElementById("resetBtn");

num0Btn.addEventListener("click", function () {
  calculator += "0";
  calcDisplay.innerText = calculator;
});

num1Btn.addEventListener("click", function () {
  calculator += "1";
  calcDisplay.innerText = calculator;
});

num2Btn.addEventListener("click", function () {
  calculator += "2";
  calcDisplay.innerText = calculator;
});

num3Btn.addEventListener("click", function () {
  calculator += "3";
  calcDisplay.innerText = calculator;
});

num4Btn.addEventListener("click", function () {
  calculator += "4";
  calcDisplay.innerText = calculator;
});

num5Btn.addEventListener("click", function () {
  calculator += "5";
  calcDisplay.innerText = calculator;
});

num6Btn.addEventListener("click", function () {
  calculator += "6";
  calcDisplay.innerText = calculator;
});

num7Btn.addEventListener("click", function () {
  calculator += "7";
  calcDisplay.innerText = calculator;
});

num8Btn.addEventListener("click", function () {
  calculator += "8";
  calcDisplay.innerText = calculator;
});

num9Btn.addEventListener("click", function () {
  calculator += "9";
  calcDisplay.innerText = calculator;
});

plusBtn.addEventListener("click", function () {
  if (calculator) {
    calculator += " + ";
    calcDisplay.innerText = calculator;
  } else {
    console.log("enter a number");
  }
});

multiBtn.addEventListener("click", function () {
  if (calculator) {
    calculator += " * ";
    calcDisplay.innerText = calculator;
  } else {
    console.log("enter a number");
  }
});

deviBtn.addEventListener("click", function () {
  if (calculator) {
    calculator += " / ";
    calcDisplay.innerText = calculator;
  } else {
    console.log("enter a number");
  }
});

resetBtn.addEventListener("click", function () {
  calculator = "";
  calcDisplay.innerText = 0;
});

equalBtn.addEventListener("click", function () {
  if (calculator) {
    calculator = eval(calculator);
    calcDisplay.innerText = calculator;
  } else {
    calcDisplay.innerText = calculator;
  }
});
// 2:42:18
