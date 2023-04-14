
const validationInput = document.querySelector('#validation-input');
const expectedLength = validationInput.getAttribute('data-length');

validationInput.addEventListener('blur', function (event) {
    const inputLength = event.target.value.length;

    if (inputLength === parseInt(expectedLength)) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});

