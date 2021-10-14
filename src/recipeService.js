import Recipe from '../models/Recipe';

// instantiates a new recipe with title, ingredients, and instructions
export const createRecipe = async (name, ingredients, instructions) => {
  const recipe = new Recipe({
    name,
    ingredients,
    instructions,
  });
  await recipe.save();
  return recipe;
};

// this function gets all the recipes that include the searchword in it (regular expressions)
export const getRecipeByName = async (searchWord) => {
  const recipes = await Recipe.find({ name: new RegExp(searchWord) });
  return recipes;
};
