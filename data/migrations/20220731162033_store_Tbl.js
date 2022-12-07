const uuid = require("uuid");

exports.up = function (knex) {
  return knex.schema.createTable("store", (tbl) => {
    tbl.string("storeGUID", 100);
    tbl.string("storeName", 100);
    tbl.string("storeDesc", 100);
    tbl.string("storeIMG", 100);
    tbl.string("lat", 100);
    tbl.string("long", 1000);
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("store");
};
