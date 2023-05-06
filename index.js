// Defined variables
let calculator = "";
const num1Btn = document.getElementById("num1");
const num2Btn = document.getElementById("num2");
const num3Btn = document.getElementById("num3");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document;
const multiBtn = document.getElementById("multiBtn");
const deviBtn = document.getElementById("deviBtn");
const equalBtn = document.getElementById("equalBtn");
const resetBtn = document.getElementById("resetBtn");

num1Btn.addEventListener("click", function () {
  calculator += " 1 ";
  console.log(calculator);
});

num2Btn.addEventListener("click", function () {
  calculator += " 2 ";
  console.log(calculator);
});

num3Btn.addEventListener("click", function () {
  calculator += " 3 ";
  console.log(calculator);
});
plusBtn.addEventListener("click", function () {
  if (calculator) {
    calculator += " + ";
    console.log(calculator);
  } else {
    console.log("enter a number");
  }
});
multiBtn.addEventListener("click", function () {
  if (calculator) {
    calculator += " * ";
    console.log(calculator);
  } else {
    console.log("enter a number");
  }
});
deviBtn.addEventListener("click", function () {
  if (calculator) {
    calculator += " / ";
    console.log(calculator);
  } else {
    console.log("enter a number");
  }
});
resetBtn.addEventListener("click", function () {
  calculator = "";
  console.clear();
});
equalBtn.addEventListener("click", function () {
  if (calculator) {
    calculator = eval(calculator);
    console.log(calculator);
  } else {
    console.log("enter a number");
  }
});
// 2:42:18
