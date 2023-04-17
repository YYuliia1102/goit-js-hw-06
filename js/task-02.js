const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("ul");
const listContent = ingredients
  .map((ingredient) => `<li class='item'>${ingredient}</li>`)
  .join("");
ulEl.innerHTML = listContent;
