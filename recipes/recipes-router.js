const router = require('express').Router();
const Recipes = require('./recipes-model.js');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const recipe = await Recipes.addRecipe(req.body);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;