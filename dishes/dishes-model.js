const db = require('../data/dbConfig.js');

module.exports = {
  find,
  findById,
  insert
};

function find() {
  return db('dishes');
}

function findById(id) {
  return db('dishes')
    .where({ id })
    .first();
}

function insert(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => findById(ids[0]));
}