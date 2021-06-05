const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(el => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.textContent = el;
  const ingredientsRef = document.querySelector('#ingredients');
  ingredientsRef.appendChild(itemOfIngredients);
});