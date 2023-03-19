/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('sandwich', (table) => {
    table.increments('id')
    .primary();
    table.string('img_url', 255);
    table.string('name', 255);
    table.text('desc','mediumtext');
    table.integer('calories');
    table.integer('likes');
    table.integer('prep_time');
    table.float('default_serving'); 
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
 return await knex.scheme.dropTable('sandwich');
};
