let counterValue = 0;

const valueEl = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action = "decrement"]');
const btnIncrement = document.querySelector('[data-action = "increment"]');

btnDecrement.addEventListener("click", decreaseCounterValue);
btnIncrement.addEventListener("click", increaseCounterValue);

function decreaseCounterValue(event) {
  counterValue--;
  valueEl.textContent = counterValue;
}
function increaseCounterValue(event) {
  counterValue++;
  valueEl.textContent = counterValue;
}
