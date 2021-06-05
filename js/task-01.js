const quantityItem = document.querySelectorAll('.item');
console.log(`В списке ${quantityItem.length} категории.`);

const namesCategorie = document.querySelectorAll('h2');
const element = document.querySelectorAll('.item');

namesCategorie.forEach((nameCategorie, idx) => {
    console.log(`Категория: ${nameCategorie.textContent}`);
    console.log(`Количество элементов: ${element[idx].lastElementChild.children.length}`);
});
