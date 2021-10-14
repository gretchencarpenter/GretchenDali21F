import * as recipeService from '../services/recipeService';

export const createRecipe = async (req, res) => {
  try {
    const { name, ingredients, directions } = req.body;
    const recipe = await recipeService.createRecipe(name, ingredients, directions);
    return res.status(200).json(recipe);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};

export const getRecipes = async (req, res) => {
  try {
    const { searchWord } = req.query.keyword;
    const recipe = await recipeService.getRecipeByName(searchWord);
    return res.status(200).json(recipe);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message || 'There was an error.' });
  }
};
