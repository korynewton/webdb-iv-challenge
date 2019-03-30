const db = require('../data/dbConfig.js');

module.exports = {
    addRecipe,
    getRecipes
};


async function addRecipe(recipe) {
    const inserted = await db('recipes').insert(recipe)
    return inserted
}

async function getRecipes() {
    const recipes = await db('recipes') 
    return recipes
}