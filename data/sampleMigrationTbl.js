exports.up = function (knex) {
  return knex.schema
    .createTable("example", (tbl) => {
      tbl.string("id").notNullable().unique().primary();
      tbl.string("firstname");
      tbl.string("lastname");
      tbl.string("email");
    })

    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("username").notNullable().unique();
      tbl.string("password").notNullable();
      tbl.string("firstName");
      tbl.string("lastName");
      tbl.string("email");
      tbl.bigInteger("workPhone");
      tbl.bigInteger("cellPhone");
      tbl.string("title");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("example");
};
