let counterValue = 0;

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
let valueEl = document.querySelector('#value');

btnDecrementEl.addEventListener('click', () =>  {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

btnIncrementEl.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})