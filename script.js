// input, span for confirm password
const form = document.querySelector('user-form');
const inputConPassword = document.querySelector('#c-password');
const spanConPasswordError = document.querySelector('.c-password');
const Password = document.querySelector('#password');


inputConPassword.addEventListener("input", (e) => {
    if (Password.value === inputConPassword.value) {
        spanConPasswordError.textContent = "";
        inputConPassword.className = 'error c-password';

    } else {
        spanConPasswordError.textContent = "* Passwords do not match"
        inputConPassword.className = 'error active c-password';
    }
})

// input, span for Phone number
const inputPhoneNum = document.querySelector('#phone-number');
const spanPhoneNum = document.querySelector('span.phoneNumber')
const phoneNumRegex = /\+62 \d{9,11}/;

inputPhoneNum.addEventListener('click', () => {
    inputPhoneNum.value.length === 0 ? inputPhoneNum.value = "+62 " : inputPhoneNum.value
})

inputPhoneNum.addEventListener('input', () => {
    const isValid = inputPhoneNum.value.length === 0 ||  phoneNumRegex.test(inputPhoneNum.value);
    if (isValid) {
        spanPhoneNum.textContent ='';
        inputPhoneNum.className = 'error';
    } else {
        spanPhoneNum.textContent = "* Invalid Phone Number";
        inputPhoneNum.className = 'error active';
    }
})