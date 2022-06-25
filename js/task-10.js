function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');

const inputEl = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');

const destroyBtn = document.querySelector('button[data-destroy]')


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  const firstSizeDiv = 30;
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');
    const sizeNewDiv = firstSizeDiv + i * 10 + 'px';
   
    newDiv.style.width = sizeNewDiv;
    newDiv.style.height = sizeNewDiv;
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.marginTop = '5px'

    fragment.appendChild(newDiv);
}
  boxesEl.appendChild(fragment);
}

function destroyBoxes() {
  boxesEl.textContent = '';
}
