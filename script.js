window.addEventListener("load", start);

var inputRed = null;
var inputGreen = null;
var inputBlue = null;

var valueRed = null;
var valueGreen = null;
var valueBlue = null;

var resultColor = null;

function start () {
  inputRed = document.querySelector("#rangeRed");
  inputGreen = document.querySelector("#rangeGreen");
  inputBlue = document.querySelector("#rangeBlue");

  valueRed = document.querySelector("#textRed");
  valueGreen = document.querySelector("#textGreen");
  valueBlue = document.querySelector("#textBlue");

  resultColor = document.querySelector("#rgbColor");

  valueRed.value = inputRed.value;
  valueGreen.value = inputGreen.value;
  valueBlue.value = inputBlue.value;

  inputRed.addEventListener("input", changeValueRed);
  inputGreen.addEventListener("input", changeValueGreen);
  inputBlue.addEventListener("input", changeValueBlue);
}

function changeValueRed() {
  valueRed.value = inputRed.value;
  changeColor();
}
function changeValueGreen() {
  valueGreen.value = inputGreen.value;
  changeColor();
}
function changeValueBlue() {
  valueBlue.value = inputBlue.value;
  changeColor();
}

function changeColor() {
  resultColor.style.backgroundColor =
    "rgb(" + inputRed.value + "," + inputGreen.value + "," + inputBlue.value + ")";
}