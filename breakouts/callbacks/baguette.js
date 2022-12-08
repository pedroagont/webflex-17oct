// HIGHER ORDER FUNCTION (RECEIVES AND INVOKES CALLBACK)
const deliverBaguette = (ingredients, options, preparationMethod) => {
  console.log('Doing baguette...');

  const baguette = preparationMethod(ingredients, options);

  console.log('Baguette done!', baguette);
};

// CALLBACK FUNCTIONS DECLARED
const myBaguettePreparation = (ingredients, options) => {
  let baguette = '🥖';

  for (const ing of ingredients) {
    baguette += ing;
  }

  if (options.cheese) {
    baguette += '🧀';
  }

  if (options.protein) {
    baguette += options.protein;
  }

  return baguette;
};

// HIGHER ORDER FUNCTIONS INVOKED WITH A CALLBACK
const myIngredients = ['🥬', '🍅', '🥒'];
const myOptions = {
  cheese: true,
  protein: '🍗',
};
deliverBaguette(myIngredients, myOptions, myBaguettePreparation);

// HIGHER ORDER FUNCTION INVOKING AN ANONYMOUS FUNCTION
const otherIngredients = ['🥦', '🥕', '🥑'];
const otherOptions = {
  cheese: false,
  protein: '🍣',
};
deliverBaguette(otherIngredients, otherOptions, (ingredients, options) => {
  let baguette = '🥖🧂';

  if (options.cheese) {
    baguette += '🧀';
  }

  for (const ing of ingredients) {
    baguette += ing;
  }

  if (options.protein) {
    baguette += options.protein;
  }

  return baguette;
});
