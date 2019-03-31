exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {name: '10 ounces of Flour'},
    {name: '5 cups of tomato sauce'},
    {name: '5 cups of pasta'},
    {name: '1 cup of pesto'},
    {name: 'One sheet of nori'},
    {name: '2 cups of white rice'}
  ]);
};