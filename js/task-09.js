function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorBody = document.querySelector('.color');

buttonEl.addEventListener('click', () => {
bodyEl.style.backgroundColor = getRandomHexColor();
colorBody.textContent = getRandomHexColor();
})
