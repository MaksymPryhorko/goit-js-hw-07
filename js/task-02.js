const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsMap = ingredients.map(el => {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.textContent = el;
  return itemOfIngredients;
});

 const ingredientsRef = document.querySelector('#ingredients');
 ingredientsRef.append(...ingredientsMap);
