const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const listEl = document.querySelector('#ingredients');
 const ingredientItem = ingredients.map(ingredient => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  items.classList.add('item');
  listEl.appendChild(items);
})