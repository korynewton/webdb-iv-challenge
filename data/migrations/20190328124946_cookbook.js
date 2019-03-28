
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
        tbl.increments()
        tbl
            .string('name', 128)
            .notNullable()
            .unique();
    })

    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.text('directions').notNullable();
    })

    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable().unique();
        tbl.decimal('quantity').notNullable();
    })

    .createTable('recipestyles', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.integer('dish_id').unsigned().notNullable().references('id').inTable('dishes').onDelete('CASCADE').onUpdate('CASCADE')
    })

    .createTable('recipe_ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes').onDelete('CASCADE').onUpdate('CASCADE')
        tbl.decimal('quantity').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('recipe_ingedients')
    .dropTableIfExists('recipe_styles')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
