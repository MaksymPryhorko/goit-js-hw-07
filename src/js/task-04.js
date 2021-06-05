let counterValue = 0;
let valueRef = document.querySelector('#value');

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const decrementBtnAction = decrementBtn.dataset.action;
decrementBtn.addEventListener('click', decrement);

const incrementBtn = document.querySelector('button[data-action="increment"]');
// const incrementBtnAction = incrementBtn.dataset.action;
incrementBtn.addEventListener('click', increment);


