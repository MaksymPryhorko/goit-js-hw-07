const changeFontSize = () => {
    textRef.style.fontSize = `${fontSizeControlRef.value}px`;
};


const fontSizeControlRef = document.querySelector('#font-size-control');
fontSizeControlRef.addEventListener('input', changeFontSize);

const textRef = document.querySelector('#text');

