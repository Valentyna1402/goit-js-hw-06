const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const expectedInputLength = parseInt(inputEl.getAttribute("data-length"));
  const currentInputLength = inputEl.value.length;
  if (currentInputLength === expectedInputLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
