const inputEl = document.querySelector('#validation-input');
let dataEl = inputEl.dataset.length = 6;
inputEl.addEventListener('blur', () => {
    let lengthInputEl = inputEl.value.length;
    if (dataEl === lengthInputEl) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
    }
})
