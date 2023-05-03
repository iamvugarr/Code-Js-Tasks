const passwordInput = document.getElementById('password-input');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const submit = document.getElementById('login');


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordRegex = /^.{8,}$/;

submit.addEventListener('click', () => {
    const isValidEmail = emailRegex.test(emailInput.value);
    const isValidPassword = passwordRegex.test(passwordInput.value);

    if (isValidEmail && isValidPassword) {

    }  if (!isValidEmail) {
        emailInput.style.border = '2px solid red'
    }  if (!isValidPassword) {
        passwordInput.style.border = '2px solid red'
    }
});

