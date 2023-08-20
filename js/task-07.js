const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", changeFontSize);

function changeFontSize() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}
