// 1 завдання
const categoriesItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItems.length}`);

// 2 завдання
categoriesItems.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements : ${element.querySelectorAll("li").length}`);
});
