const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const ingredientsList = ingredients.reduce((list, elem)=>{
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = elem;
  ingredientsItem.classList.add("item");
  return [...list,ingredientsItem];
}, []);

 const ingredientsUl = document.getElementById('ingredients');
 ingredientsUl.append(...ingredientsList);