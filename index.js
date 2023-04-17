// Defined variables
let total = 0;
const showQuantity = document.getElementById("show-cart-btn");
const addOneToCart = document.getElementById("add-one-to-cart-btn");
const addTwoToCart = document.getElementById("add-two-to-cart-btn");
const addThreeToCart = document.getElementById("add-three-to-cart-btn");
const resetBtn = document.getElementById("reset-cart-btn");

showQuantity.addEventListener("click", function () {
  console.log(`cart total: ${total}`);
});

addOneToCart.addEventListener("click", function () {
  total++;
  console.log(`cart total: ${total}`);
});

addTwoToCart.addEventListener("click", function () {
  total += 2;
  console.log(`cart total: ${total}`);
});

addThreeToCart.addEventListener("click", function () {
  total += 3;
  console.log(`cart total: ${total}`);
});

resetBtn.addEventListener("click", function () {
  total = 0;
  console.log(`cart total: ${total}`);
});

// 2:42:18
