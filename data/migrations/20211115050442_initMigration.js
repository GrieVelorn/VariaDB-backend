exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
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
  return knex.schema.dropTableIfExists("users");
};
