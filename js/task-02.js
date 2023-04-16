const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector("ul");

for (const ingredient of ingredients) {
  const liEl = document.createElement("li");
  liEl.classList.add("item")
  liEl.innerText = ingredient;
  ulEl.appendChild(liEl);
}

// console.log(ulEl);