exports.seed = function(knex, Promise) {
  return knex('table_name').insert([
    {name: 'rowValue1', dish_id:'1', recipe_id:"1"},
    {name: 'rowValue2', dish_id:'1', recipe_id:"1"},
    {name: 'rowValue3', dish_id:'1', recipe_id:"1"}
  ]);
};