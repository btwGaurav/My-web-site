let press = "true";
const bulbElement = document.querySelector("#bulbb");
const buttonElement = document.querySelector("#btn1");

// Toggle function to switch between "on" and "off"
function toggle() {
  if (press === "true") {
    bulbElement.style.background = "gold"; // Turn on
    press = "false";
  } else {
    bulbElement.style.background = "rgb(155, 170, 184)"; // Turn off
    press = "true";
  }
}

// Add a single event listener to the button
buttonElement.addEventListener("click", toggle);
