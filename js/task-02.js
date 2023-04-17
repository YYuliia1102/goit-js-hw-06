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

// const liArray = []; // створюємо порожній масив

// ingredients.forEach(ingredient => {
//   const li = document.createElement('li'); // створюємо <li> елемент
//   li.textContent = ingredient; // додаємо текстовий вміст до <li> елементу
//   li.classList.add('item'); // додаємо клас item до <li> елементу
//   liArray.push(li); // додаємо <li> елемент до масиву
// });

// const ul = document.querySelector('#ingredients'); // знаходимо список ul
// ul.append(...liArray); // додаємо всі <li> елементи до списку ul

