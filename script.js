"use strict";

let keys = document.querySelectorAll("div.calculator-item");

function displayDigits(keysObject) {
  // outputs in the form the pressed keys as a string
  let inputUser = document.querySelector("form input");

  keysObject.forEach((keyElement) => {
    if (keyElement.innerText == "AC") {
      keyElement.addEventListener("click" , () => {
      inputUser.value = "";
      })
    }
    else {
      keyElement.addEventListener("click", () => {
      let keyText = keyElement.innerText;
      inputUser.value += keyText;
      })
    }
  });
};

function calculateValue() {
  let formCalc = document.querySelector("form");
  let inputUser = document.querySelector("form input");

  let result = "";

  formCalc.addEventListener("submit", (e) => {
    e.preventDefault();
    result = Function("return " + inputUser.value)();
    inputUser.value = result;
  });
}

displayDigits(keys);
calculateValue();