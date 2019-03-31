exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    {quantity: '5', ingredient_id: '1', recipe_id:'1'},
    {quantity: '3', ingredient_id: '2', recipe_id:'1'},
    {quantity: '5', ingredient_id: '3', recipe_id:'2'},
    {quantity: '5', ingredient_id: '4', recipe_id:'2'},
    {quantity: '3', ingredient_id: '5', recipe_id:'3'},
    {quantity: '5', ingredient_id: '6', recipe_id:'3'}
  ]);
};