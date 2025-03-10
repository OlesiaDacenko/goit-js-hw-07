// const categoriesList = document.querySelector("#categories");

const categoryItems = document.querySelectorAll("li.item");

console.log(`Number of catecories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const catTitle = item.querySelector("h2").textContent;

  const catElementsCount = item.querySelectorAll("li").length;

  console.log(`Category: ${catTitle}`);
  console.log(`Elements: ${catElementsCount}`);
});
