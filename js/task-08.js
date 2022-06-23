const form = document.querySelector('.login-form');

form.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert('Заповніть будь-ласка всі поля!')
    }

    const data = {
        email: email.value,
        password: password.value,
    }
    console.log(data);
    
   event.currentTarget.reset();
}
