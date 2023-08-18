function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", changeColor);

function changeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = `${document.body.style.backgroundColor}`;
}
