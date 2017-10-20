
exports.up = function(knex, Promise) {
  return knex.schema.createTable('petsList', (table)=>{
    table.increments();
    table.string('name');
    table.string('gender');
    table.string('type');
    table.timestamps(true,true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('petsList')
};
