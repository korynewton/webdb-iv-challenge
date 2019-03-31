const db = require('../data/dbConfig.js');

module.exports = {
  getDishes,
  getDish,
  addDish
};

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => findById(ids[0]));
}

// function getDish(id) {
//   return db('recipestyles')
//     .where({dish_id: id})
// };

function getDish(id) {
  return db('dishes')
    .innerJoin('recipe_styles', 'dishes.id', '=', 'recipe_styles.id')
    .innerJoin('recipes', 'recipe_styles.id', '=', 'recipes.id')
    .select('recipes.name')
    .where({ 'recipe_styles.dish_id': id })
    .then(recipes => {
      return db('dishes')
        .where({ id })
        .first()
        .then(dish => {
          return { ...dish, recipes };
        });
    });
}