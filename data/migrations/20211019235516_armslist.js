exports.up = function (knex) {
  return knex.schema.createTable("armslist", (tbl) => {
    tbl.increments("id");
    tbl.string("title");
    tbl.string("link");
    tbl.string("image");
    tbl.string("saleType");
    tbl.string("location");
    tbl.string("time");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("armslist");
};
