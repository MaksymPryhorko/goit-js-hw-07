const createBoxes = (amount) => {
    let size = 30;
    
    for (let i = 1; i <= amount; i += 1) {
    size += 10;
    const createDiv = document.createElement('div');
    createDiv.style.width = `${size}px`;
    createDiv.style.height = `${size}px`;
    createDiv.style.backgroundColor = randColor();
        createDiv.style.margin = '5px';
        boxesRef.appendChild(createDiv);
    };
};

const destroyBoxes = () => {
    const allDives = document.querySelectorAll('#boxes div');
    allDives.forEach(div => {
        const linkDiv = document.querySelector('#boxes div');
        linkDiv.remove();
    });
    inputRef.value = 0;
};


function loadCreateBoxes() {
    createBoxes(inputRef.value);
};

const inputRef = document.querySelector('#controls input');
inputRef.addEventListener('blur', () => {});

const boxesRef = document.querySelector('#boxes');

const renderBtnRef = document.querySelector('button[data-action="render"]');
const inputRefValue = inputRef.value;
renderBtnRef.addEventListener('click', loadCreateBoxes);

const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
destroyBtnRef.addEventListener('click', destroyBoxes);


function randColor() {
    const r = Math.floor(Math.random() * (256)),
          g = Math.floor(Math.random() * (256)),
          b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
};
