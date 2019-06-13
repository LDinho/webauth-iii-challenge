exports.up = async function(knex) {
  await knex.schema.createTable('users', users => {
    users.increments('id');
    users
      .string('username', 128)
      .notNullable()
      .unique();
    users
      .string('password', 128)
      .notNullable();
    users
      .string('department', 128)
      .notNullable();
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};
