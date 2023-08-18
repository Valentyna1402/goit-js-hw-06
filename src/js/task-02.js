const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsContainerEl = document.querySelector("#ingredients");

const ingridientsEl = ingredients.map((ingridient) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("item");
  listItemEl.textContent = ingridient;

  return listItemEl;
});

ingridientsContainerEl.append(...ingridientsEl);

console.log(ingridientsContainerEl);
