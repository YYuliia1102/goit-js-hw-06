const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const liArray = [];

const ul = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add('item');
  liArray.push(li);
});

ul.append(...liArray);

console.log(liArray)


