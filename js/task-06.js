const check = () => {

    if (inputRef.value.length >= inputRef.getAttribute('data-length')) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid')
    }; 

    if (inputRef.value.length < inputRef.getAttribute('data-length')) {
        inputRef.classList.remove('valid')
        inputRef.classList.add('invalid')
    };

    // if (inputRef.value === '') {
    //     inputRef.classList.remove('invalid');
    //     inputRef.classList.remove('valid')
    // };
    //Условие, при котором, бордер поля ввода Инпут светится серым цветом, если оно пустое.
};

const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', check);
