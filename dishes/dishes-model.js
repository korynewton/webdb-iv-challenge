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

function getDish(id) {
  return db('recipestyles')
    .where({dish_id: id})
};