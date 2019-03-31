exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {name: 'Cheese', directions:"call dominos"},
    {name: 'Peperoni', directions:"call dominos"},
    {name: 'Anchovies', directions:"call dominos"},
    {name: 'Florentine', directions:"uber eats"},
    {name: 'Tomato Basil', directions:"uber eats"},
    {name: 'Sphaghetti', directions:"uber eats"},
    {name: 'Salmon Roll', directions:"postmates"},
    {name: 'Vegetable Roll', directions:"postmates"},
    {name: 'Tuna Avocado Roll', directions:"postmates"}
  ]);
};