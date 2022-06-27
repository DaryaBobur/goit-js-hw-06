const inputEl = document.querySelector('#validation-input');
const dataEl = +inputEl.dataset.length;
inputEl.addEventListener('blur', () => {
    const lengthInputEl = inputEl.value.length;
    if (dataEl === lengthInputEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
})
