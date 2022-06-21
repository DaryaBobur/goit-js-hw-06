const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsPotatoes = document.createElement('li');
itemsPotatoes.classList.add('item');
itemsPotatoes.textContent = 'Potatoes';

const itemsMushrooms = document.createElement('li');
itemsMushrooms.classList.add('item');
itemsMushrooms.textContent = 'Mushrooms';

const itemsGarlic = document.createElement('li');
itemsGarlic.classList.add('item');
itemsGarlic.textContent = 'Garlic';

const itemsTomatos = document.createElement('li');
itemsTomatos.classList.add('item');
itemsTomatos.textContent = 'Tomatos';

const itemsHerbs = document.createElement('li');
itemsHerbs.classList.add('item');
itemsHerbs.textContent = 'Herbs';

const itemsCondiments = document.createElement('li');
itemsCondiments.classList.add('item');
itemsCondiments.textContent = 'Condiments';

const listEl = document.querySelector('#ingredients');

listEl.append(itemsPotatoes, itemsMushrooms, itemsGarlic, itemsTomatos, itemsHerbs, itemsCondiments);

console.log(listEl);
