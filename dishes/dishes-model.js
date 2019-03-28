const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  addDish
};

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => findById(ids[0]));
}