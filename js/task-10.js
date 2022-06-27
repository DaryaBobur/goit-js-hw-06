const boxesEl = document.querySelector('#boxes');

const inputEl = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]')

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

let firstSizeDiv = 20;

function createBoxes() {
  const amount = inputEl.value;
  const fragment = document.createDocumentFragment(); 
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
  
    firstSizeDiv += 10;
    newDiv.style.width = firstSizeDiv + 'px';
    newDiv.style.height = firstSizeDiv + 'px';
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.marginTop = '5px'

  fragment.append(newDiv);
}
 boxesEl.append(fragment);
}

function destroyBoxes() {
  boxesEl.textContent = '';
  firstSizeDiv = 20;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}