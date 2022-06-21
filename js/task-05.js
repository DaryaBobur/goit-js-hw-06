const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', name => {
if (nameInputEl.value === '') {
return nameOutputEl.textContent = "Anonymous";
} 
return nameOutputEl.textContent = name.currentTarget.value;    
})