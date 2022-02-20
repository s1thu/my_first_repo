let display = document.querySelector(".display");
let key = document.querySelector(".key");
let keypad = document.querySelector(".keypad");
let operators = ["+", "-", "*", "/", "%"];

let clearall = () => (display.innerText = "");

let calc = (_) => {
  if (operators.includes(display.innerText[display.innerText.length - 1])) {
    display.innerText = display.innerText;
  } else {
    display.innerText = eval(display.innerText);
  }
};
let clearlast = () =>
  (display.innerText = display.innerText.substring(
    0,
    display.innerText.length - 1
  ));

//fixing displaying errors
let displaytext = (x) => {
  if (filter(x)) {
    display.innerText += x;
  }
};
let filter = (x) => {
  let currentText = display.innerText;
  let lastchar = currentText[currentText.length - 1];
  if (currentText == "0") {
    if (x != ".") {
      clearlast();
    }
  }

  if (operators.includes(x) && operators.includes(lastchar)) {
    return false;
  }
  if (currentText.length >= 20) {
    return false;
  }

  return true;
};

keypad.addEventListener("click", (_) => {
  if (display.innerText.length > 10) {
    display.style.fontSize = 20 + "px";
  } else if (display.innerText.length > 5) {
    display.style.fontSize = 60 + "px";
  }
});
