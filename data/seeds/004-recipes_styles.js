exports.seed = function(knex, Promise) {
  return knex('recipestyles').insert([
    {name: 'granny style', dish_id:'1', recipe_id:"1"},
    {name: 'margherita', dish_id:'1', recipe_id:"2"},
    {name: 'italian', dish_id:'2', recipe_id:"3"},
    {name: 'Sicilian', dish_id:'2', recipe_id:"4"},
    {name: 'Handroll', dish_id:'3', recipe_id:"5"},
    {name: 'vegan', dish_id:'3', recipe_id:"6"}
  ]);
};